import './styles.css';
import ButtonBlue from "../../components/ButtonPrimary";
import ButtonWhite from "../../components/ButtonSecondary";
import HeaderClient from "../../components/HeaderClient";
import ProductDetailsCard from "../../components/ProductDetailsCard";


export default function ProductDetails() {

    return (
        <>
        <HeaderClient />
        <main>
          <section id="product-details-section" className="dsc-container">
            <ProductDetailsCard />
            <div className="dsc-btn-page-container">
              <ButtonBlue />
              <ButtonWhite />
            </div>
          </section>
        </main>
      </>
    );
}