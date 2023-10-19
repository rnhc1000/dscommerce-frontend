
import { BrowserRouter, Navigate, Route, Routes, unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import Catalog from './routes/ClientHome/Catalog';
import ProductDetails from './routes/ClientHome/ProductDetails';
import ClientHome from './routes/ClientHome';
import Cart from './routes/ClientHome/Cart';
import { useEffect, useState } from 'react';
import { ContextCartCount } from './utils/contex-cart';
import Login from './routes/ClientHome/Login';
import Admin from './routes/Admin';
import AdminHome from './routes/Admin/AdminHome';
import { history } from './utils/history';
import { PrivateRoute } from './components/PrivateRoute';
import { AccessTokenPayloadDTO } from './models/auth';
import { ContextToken } from './utils/context-token';
import * as authService from './services/auth-service';
import * as cartService from './services/cart-service';
import Confirmation from './routes/ClientHome/Confirmation';
function App() {

  const [contextCartCount, setContextCartCount] = useState<number>(0);

  const [contextTokenPayload, setContextTokenPayload] = useState<AccessTokenPayloadDTO>();

  useEffect(() => {
    setContextCartCount(cartService.getCart().items.length);
    if (authService.isAuthenticated()) {
      const payload = authService.getAccessTokenPayload();
      setContextTokenPayload(payload);
    }
  }, []);


  return (
    <ContextToken.Provider value={{ contextTokenPayload, setContextTokenPayload }}>
      <ContextCartCount.Provider value={{ contextCartCount, setContextCartCount }} >
        {/* <BrowserRouter> */}
        <HistoryRouter history={history}>
          <Routes>
            <Route path="/" element={<ClientHome />} >
              <Route index element={<Catalog />}></Route>
              <Route path="catalog" element={<Catalog />}></Route>
              <Route path="product-details/:productId" element={<ProductDetails />}></Route>
              <Route path="cart" element={<Cart />}></Route>
              <Route path="login" element={<Login />}></Route>

              <Route path="confirmation/:orderId" element={
                <PrivateRoute>
                  <Confirmation />
                </PrivateRoute>}>
              </Route>
            </Route>
            <Route path="*" element={<Navigate to="/" />}></Route>
            <Route path="/admin/" element={

              <PrivateRoute roles={['ROLE_ADMIN']}>
                <Admin />
              </PrivateRoute>

            }>
              <Route index element={<AdminHome />}></Route>
            </Route>
          </Routes>
          {/* </BrowserRouter> */}
        </HistoryRouter>
      </ContextCartCount.Provider>
    </ContextToken.Provider>
  )

}

export default App
