import './styles.css';
import ButtonBlue from "../../../components/ButtonPrimary";
import ButtonWhite from "../../../components/ButtonSecondary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import { ProductDTO } from '../../../models/product';

const product: ProductDTO = {
  id: 2,
  name: "Smart TV",
  description: "TV Top",
  imgUrl: "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg",
  price: 2500.99,
  categories: [
    {
      id: 2,
      name: "Eletronicos"
    },
    {
      id: 3,
      name: "Computadores"
    },
    {
      id: 4,
      name: "Importados"
    }
  ]

}

export default function ProductDetails() {

  return (
    <>
      <main>
        <section id="product-details-section" className="dsc-container">
          <ProductDetailsCard product={ product }/>
          <div className="dsc-btn-page-container">
            <ButtonBlue text = "Comprar"/>
            <ButtonWhite text = "Inicio"/>
          </div>
        </section>
      </main>
    </>
  );
}