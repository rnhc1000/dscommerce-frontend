import './styles.css';
import editImg from '../../../assets/edit.svg';
import deleteImg from '../../../assets/delete.svg';
import { useEffect, useState } from 'react';
import * as productService from '../../../services/product-service';
import { ProductDTO } from '../../../models/product';
import SearchBar from '../../../components/SearchBar';
import LoadBar from '../../../components/LoadBar';
import DialogInfo from '../../../components/DialogInfo';
import DialogConfirmation from '../../../components/DialogConfirmation';
import ButtonWhite from '../../../components/ButtonSecondary';
import { useNavigate } from 'react-router-dom';

type QueryParams = {
    page: number;
    name: string;
}

export default function ProductListing() {

    const [dialogInfoData, setDialogInfoData] = useState({
        visible: false,
        message: "Operação com sucesso"
    });

    const [dialogConfirmationData, setDialogConfirmationData] = useState({
        id: 0,
        visible: false,
        message: "Tem certeza?"
    });

    const [queryParams, setQueryParams] = useState<QueryParams>({
        page: 0,
        name: ""
    });

    const [isLastPage, setIsLastPage] = useState(false);

    const [products, setProducts] = useState<ProductDTO[]>([]);

    const navigate = useNavigate();

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

    function handleDialogInfoClose() {
        setDialogInfoData({ ...dialogInfoData, visible: false })
    }


    function handleDeleteClick(productId: number) {
        setDialogConfirmationData({ ...dialogConfirmationData, id: productId, visible: true })
    }

    function handleUpdateClick(productId: number) {
        navigate(`/admin/products/${productId}`)
    }


    function handleDialogConfirmationAnswer(answer: boolean, productId: number) {

        if (answer) {
            productService.deleteById(productId)
                .then(() => {
                    setProducts([]);
                    setQueryParams({ ...queryParams, page: 0 });

                })
                .catch(error => {

                    setDialogInfoData({
                        visible: true,
                        message: error.response.data.error
                    })

                })
        }
        console.log(answer);
        setDialogConfirmationData({ ...dialogConfirmationData, visible: false })
    }

    function handleNewProductClick() {


        navigate("/admin/products/create")

    }

    return (
        <main>
            <section id="product-listing-section" className="dsc-container">
                <h2 className="dsc-section-title dsc-mb20">Cadastro de produtos</h2>

                <div className="dsc-btn-page-container dsc-mb20">
                    <div onClick={handleNewProductClick}>
                        <ButtonWhite text="Novo" />
                    </div>
                    {/* <div className="dsc-btn dsc-btn-white">Novo</div> */}
                </div>
                <SearchBar onSearch={handleSearch} />

                <table className="dsc-table dsc-mb20 dsc-mt20">
                    <thead>
                        <tr>
                            <th className="dsc-tb576">ID</th>
                            <th></th>
                            <th className="dsc-tb768">Preço</th>
                            <th className="dsc-txt-left">Nome</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product => (
                                <tr key={product.id}>
                                    <td className="dsc-tb576">{product.id}</td>
                                    <td><img className="dsc-product-listing-image" src={product.imgUrl} alt={product.name}></img></td>
                                    <td className="dsc-tb768">R$ {product.price.toFixed(2)}</td>
                                    <td className="dsc-txt-left">{product.name}</td>
                                    <td><img onClick={() => handleUpdateClick(product.id)} className="dsc-product-listing-btn" src={editImg} alt="Editar"></img></td>
                                    <td><img onClick={() => handleDeleteClick(product.id)} className="dsc-product-listing-btn" src={deleteImg} alt="Deletar"></img></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                {
                    !isLastPage &&
                    <div onClick={handlePageClick}>
                        <LoadBar />
                    </div>
                }
            </section>
            {
                dialogInfoData.visible &&
                <DialogInfo
                    message={dialogInfoData.message}
                    onDialogClose={handleDialogInfoClose}
                />
            }
            {
                dialogConfirmationData.visible &&
                <DialogConfirmation
                    id={dialogConfirmationData.id}
                    message={dialogConfirmationData.message}
                    onDialogAnswer={handleDialogConfirmationAnswer}
                />
            }
        </main>
    );
}