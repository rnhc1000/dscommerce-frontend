import './styles.css';
import SearchBar from '../../../components/SearchBar';
import CatalogCard from '../../../components/CatalogCard';
import LoadBar from '../../../components/LoadBar';
import * as productService from '../../../services/product-service';
import { useEffect, useState } from 'react';
import { ProductDTO } from '../../../models/product';
// import axios from 'axios';


export default function Catalog() {

  /**
   * 1. useState criado como uma lista de produtos
   * e inicializado com um lista vazia[]
   */

  const [products, setProducts] = useState<ProductDTO[]>([]);

  /**
   * Ao montar o componente buscar os primeiros elementos
   * useEffect(() => {}, []) argumento função e lista de dependencias
   */

  useEffect(() => {
    productService.findAll()
    .then(response => {
      setProducts(response.data.content)
    });
  },[]);
  return (
    <>
      <main>
        <section id="dsc-catalog-section" className="dsc-container">
          <SearchBar />

          <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
            {
              // productService.findAll().map(product => <CatalogCard key={product.id} product={product} />)
              products.map(product => <CatalogCard key={product.id} product={product} />)

            }

          </div>

          <LoadBar />
        </section>
      </main>
    </>
  );
}