import './styles.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import FormInput from '../../../components/FormInput';
import * as forms from '../../../utils/forms';
import * as productService from '../../../services/product-service';
import * as categoryService from '../../../services/category-service';
import FormTextArea from '../../../components/FormTextArea';
import { CategoryDTO } from '../../../models/categories';
import FormSelect from '../../../components/FormSelect';
import { selectStyles } from '../../../utils/select';

export default function ProductForm() {

    const params = useParams();

    const isEditing: boolean = params.productId !== 'create';

    // console.log(isEditing);

    const [categories, setCategories] = useState<CategoryDTO[]>([]);

    const navigate = useNavigate();

    const [formData, setFormData] = useState<any>({

        name: {
            value: "",
            id: "name",
            name: "name",
            type: "text",
            placeholder: "Nome",
            validation: function (value: string) {
                // return value.length >= 3 && value.length <= 80
                return /^.{3,80}$/.test(value);
            },
            message: "Favor informar um nome de 3 a 80 caracteres"
        },
        price: {
            value: "",
            id: "price",
            name: "price",
            type: "number",
            placeholder: "Preço",
            validation: function (value: any) {
                return Number(value) > 0;
            },
            message: "Favor informar um valor positivo!"
        },
        imgUrl: {
            value: "",
            id: "imgUrl",
            name: "imgUrl",
            type: "text",
            placeholder: "Imagem",
        },
        description: {
            value: "",
            id: "description",
            name: "description",
            type: "text",
            placeholder: "Descrição",
            validation: function (value: string) {
                // return value.length >= 3 && value.length <= 80
                return /^.{10,}$/.test(value);
            },
            message: "A descrição deve ter pelo menos 10 caracteres"
        },
        categories: {
            value: [],
            id: "categories",
            name: "categories",
            placeholder: "Categorias",
            validation: function (value: CategoryDTO[]) {

                return value.length > 0;

            },
            message: "Escolha ao menos uma categoria!"
        }
    });

    useEffect(() => {
        categoryService.findAllRequest()
            .then(response => {
                setCategories(response.data);
            });
    }, []);

    useEffect(() => {
        if (isEditing) {
            productService.findById(Number(params.productId))
                .then(response => {
                    // setFormData(response.data);
                    // console.log(response.data);
                    setFormData(forms.updateAll(formData, response.data))
                })
            console.log("Editar");
        }
        console.log("Adicionar Produto...")

    }, [])

    function handleInputChange(event: any) {
        const result = forms.updateAndValidate(formData, event.target.name, event.target.value);
        // const dataUpdated = forms.update(formData, event.target.name, event.target.value);
        // const dataValidated = forms.validate(dataUpdated, event.target.name);
        // const value = event.target.value; // valor da caixa
        // const name = event.target.name; // nome da caixa
        setFormData(result);
    }

    function handleTurnDirty(name: string) {
        const newFormData = forms.dirtyAndValidate(formData, name);
        setFormData(newFormData);
    }

    function handleSubmit(event: any) {
        const formDataValidated = forms.dirtyAndValidateAll(formData);
        if (forms.hasAnyInvalid(formDataValidated)) {
            setFormData(formDataValidated);
            console.log("erro......")
            // return;
        }

        const requestBody = forms.toValues(formData);

        if (isEditing) {
            requestBody.id = params.productId;
        }

        const request = isEditing
            ? productService.updateRequest(requestBody)
            : productService.addRequest(requestBody);

        request.then(() => {
            navigate("/admin/products")
        })

    }

    return (
        <main>
            <section id="product-form-section" className="dsc-container">
                <div className="dsc-product-form-container">
                    <form className="dsc-card dsc-form" onSubmit={handleSubmit}>
                        <h2>Dados do produto</h2>
                        <div className="dsc-form-controls-container">
                            <div>
                                <FormInput
                                    {...formData.name}
                                    onTurnDirty={handleTurnDirty}
                                    className="dsc-form-control"
                                    onChange={handleInputChange}
                                />
                                <div className="dsc-form-error">{formData.name.message}</div>
                            </div>
                            <div>
                                <FormInput
                                    {...formData.price}
                                    onTurnDirty={handleTurnDirty}
                                    className="dsc-form-control"
                                    onChange={handleInputChange}
                                />
                                <div className="dsc-form-error">{formData.price.message}</div>
                            </div>
                            <div>
                                <FormInput
                                    {...formData.imgUrl}
                                    onTurnDirty={handleTurnDirty}
                                    className="dsc-form-control"
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <FormSelect
                                    {...formData.categories}
                                    className="dsc-form-control dsc-form-select-container"
                                    styles={selectStyles}
                                    options={categories}
                                    onChange={(obj: any) => {
                                        const newFormData = forms.updateAndValidate(formData, "categories", obj);
                                        console.log(formData.categories);
                                        setFormData(newFormData);
                                    }}
                                    onTurnDirty={handleTurnDirty}
                                    isMulti
                                    getOptionLabel={(obj: any) => obj.name}
                                    getOptionValue={(obj: any) => String(obj.id)}
                                />
                                <div className="dsc-form-error">{formData.categories.message}</div>
                            </div>
                            {/* <div>
                                <select className="dsc-form-control dsc-select" required>
                                    <option value="" disabled selected>Categorias</option>
                                    <option value="1">Valor 1</option>
                                    <option value="2">Valor 2</option>
                                </select>
                            </div> */}
                            <div>
                                <FormTextArea
                                    {...formData.description}
                                    onTurnDirty={handleTurnDirty}
                                    className="dsc-form-control dsc-text-area"
                                    onChange={handleInputChange}
                                />
                                <div className="dsc-form-error">{formData.description.message}</div>
                            </div>
                        </div>

                        <div className="dsc-product-form-buttons">
                            <Link to="/admin/products">
                                <button type="reset" className="dsc-btn dsc-btn-white">Cancelar</button>
                            </Link>
                            <button type="submit" className="dsc-btn dsc-btn-blue">Salvar</button>
                        </div>
                    </form>
                </div>
            </section >
        </main >
    );
}
