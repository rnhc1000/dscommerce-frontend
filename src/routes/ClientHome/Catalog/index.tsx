import './styles.css';
import SearchBar from '../../../components/SearchBar';
import CatalogCard from '../../../components/CatalogCard';
import LoadBar from '../../../components/LoadBar';
import * as productService from '../../../services/product-service';
import { useEffect, useState } from 'react';
import { ProductDTO } from '../../../models/product';
// import axios from 'axios';


type QueryParams = {
  page: number;
  name: string;
}
export default function Catalog() {

  /**
   * 1. useState criado como uma lista de produtos
   * e inicializado com um lista vazia[]
   */


  const [isLastPage, setIsLastPage] = useState(false);
  const [products, setProducts] = useState<ProductDTO[]>([]);

  const [queryParams, setQueryParams] = useState<QueryParams>({
    page: 0,
    name: ""
  });

  /**
   * Ao montar o componente buscar os primeiros elementos
   * useEffect(() => {}, []) argumento função e lista de dependencias
   * Se productName mudar a função findPageRequest é executada
   */

  useEffect(() => {
    productService.findPageRequest(queryParams.page, queryParams.name)
      .then(response => {
        const nextPage = response.data.content;
        setProducts(products.concat(nextPage));
        setIsLastPage(response.data.last);
      });
  }, [queryParams]);

  function handleSearch(searchText: string) {
    setProducts([]);
    setQueryParams({ ...queryParams, page: 0, name: searchText });
  }

  function handlePageClick() {
    setQueryParams({ ...queryParams, page: queryParams.page + 1 });
  }

  return (
    <>
      <main>
        <section id="dsc-catalog-section" className="dsc-container">
          <SearchBar onSearch={handleSearch} />

          <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
            {
              // productService.findAll().map(product => <CatalogCard key={product.id} product={product} />)
              products.map(product => <CatalogCard key={product.id} product={product} />)

            }

          </div>
          {
            !isLastPage &&
            <div onClick={handlePageClick}>
              <LoadBar />
            </div>
          }
        </section>
      </main>
    </>
  );
}