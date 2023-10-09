import './styles.css';
import SearchBar from '../../../components/SearchBar';
import CatalogCard from '../../../components/CatalogCard';
import LoadBar from '../../../components/LoadBar';
import * as productService from '../../../services/product-service';



export default function Catalog() {

  return (
    <>
      <main>
        <section id="dsc-catalog-section" className="dsc-container">
          <SearchBar />

          <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
            {
              productService.findAll().map(product => <CatalogCard key={product.id} product={product} />)

            }

          </div>

          <LoadBar />
        </section>
      </main>
    </>
  );
}