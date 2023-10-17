
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Catalog from './routes/ClientHome/Catalog';
import ProductDetails from './routes/ClientHome/ProductDetails';
import ClientHome from './routes/ClientHome';
import Cart from './routes/ClientHome/Cart';
import { useState } from 'react';
import { ContextCartCount } from './utils/contex-cart';

function App() {
  const [contextCartCount, setContextCartCount] = useState<number>(0)

  return (
    <ContextCartCount.Provider value={{ contextCartCount, setContextCartCount }} >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ClientHome />} >
            <Route index element={<Catalog />}></Route>
            <Route path="catalog" element={<Catalog />}></Route>
            <Route path="product-details/:productId" element={<ProductDetails />}></Route>
            <Route path="cart" element={<Cart />}></Route>
          </Route>
          <Route path="*" element={<Navigate to="/" />}></Route>
        </Routes>
      </BrowserRouter>
    </ContextCartCount.Provider>
  )

}

export default App
