import './styles.css';
import ButtonBlue from "../../../components/ButtonPrimary";
import ButtonWhite from "../../../components/ButtonSecondary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import * as productService from '../../../services/product-service';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { ProductDTO } from '../../../models/product';
import * as cartService from '../../../services/cart-service';
import { ContextCartCount } from '../../../utils/contex-cart';

export default function ProductDetails() {

  const params = useParams();
  const navigate = useNavigate();
  const {setContextCartCount} = useContext(ContextCartCount);
  const [product, setProduct] = useState<ProductDTO>();

  useEffect(() => {

    productService.findById(Number(params.productId))

      .then(response => {
        setProduct(response.data);
      })

      .catch(() => {
        navigate("/");
      });
  
  }, []);

  function handleBuyClick() {

    if (product) {

      cartService.addProduct(product);
      setContextCartCount(cartService.getCart().items.length);
      navigate("/cart");
    }

  }

  return (

    <main>
        <section id="product-details-section" className="dsc-container">
          {
            product &&
            <ProductDetailsCard product={product} />
          }
          <div className="dsc-btn-page-container">
            <div onClick={handleBuyClick}>
              <ButtonBlue text="Comprar" />
            </div>
            <Link to={'/'}>
              <ButtonWhite text="Inicio" />
            </Link>
          </div>
        </section>
      </main>

  );
  
}