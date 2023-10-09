import './styles.css';
import ButtonBlue from "../../../components/ButtonPrimary";
import ButtonWhite from "../../../components/ButtonSecondary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import * as productService from '../../../services/product-service';
import { Link, useParams } from 'react-router-dom';



export default function ProductDetails() {


  const params = useParams();
  const product = productService.findById(Number(params.productId));

  return (
    <>
      <main>
        <section id="product-details-section" className="dsc-container">
          {
            product &&
            <ProductDetailsCard product={product} />
          }
          <div className="dsc-btn-page-container">
            <ButtonBlue text="Comprar" />
            <Link to={'/'}>
              <ButtonWhite text="Inicio" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}