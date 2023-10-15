import './styles.css';
import ButtonBlue from "../../../components/ButtonPrimary";
import ButtonWhite from "../../../components/ButtonSecondary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import * as productService from '../../../services/product-service';
import { Link, useParams, useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ProductDTO } from '../../../models/product';
// import axios from 'axios';
import * as cartService from '../../../services/cart-service';




export default function ProductDetails() {


  const params = useParams();

  const navigate = useNavigate();

  const [product, setProduct] = useState<ProductDTO>();
  useEffect(() => {
    productService.findById(Number(params.productId))
      .then(response => {
        console.log(response.data);
        setProduct(response.data);
      })
      .catch(() => {
        navigate("/");
        // if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        // console.log(error.response.data);
        // console.log(error.response.status);
        // console.log(error.response.headers);
        // } else {
        //   // Something happened in setting up the request that triggered an Error
        //   console.log('Error', error.message);
        // }
      });

    // const prod = productService.findById(Number(params.productId));
    // setProduct(prod)
  }, []);
  //const product = productService.findById(Number(params.productId));

  function handleBuyClick() {

    if (product) {

      cartService.addProduct(product);
      navigate("/cart");
    }
  }

  return (
    <>
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
    </>
  );
}