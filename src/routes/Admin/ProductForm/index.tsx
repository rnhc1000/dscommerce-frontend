import './styles.css';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import FormInput from '../../../components/FormInput';
import * as forms from '../../../utils/forms';
import * as productService from '../../../services/product-service';

export default function ProductForm() {

    const params =  useParams();

    const isEditing: boolean = params.productId !== 'create';

    console.log(isEditing);


    const [formData, setFormData] = useState<any>({

        name: {
            value: "",
            id: "name",
            name: "name",
            type: "text",
            placeholder: "Nome",
        },
        price: {
            value: "",
            id: "price",
            name: "price",
            type: "number",
            placeholder: "Preço",
            validation: function(value: any) {
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
        }
    });

    useEffect(() => {
        if (isEditing) {
            productService.findById(Number(params.productId))
            .then (response => {
                // setFormData(response.data);
                // console.log(response.data);
                setFormData(forms.updateAll(formData, response.data))
            })
        }
        console.log("Editar");
      },[])

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

    return (
        <main>
            <section id="product-form-section" className="dsc-container">
                <div className="dsc-product-form-container">
                    <form className="dsc-card dsc-form">
                        <h2>Dados do produto</h2>
                        <div className="dsc-form-controls-container">
                            <div>
                                <FormInput
                                    {...formData.name}
                                    onTurnDirty={handleTurnDirty}
                                    className="dsc-form-control"
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="dsc-form-error">{formData.name.message}</div>
                            <div>
                                <FormInput
                                    {...formData.price}
                                    onTurnDirty={handleTurnDirty}
                                    className="dsc-form-control"
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="dsc-form-error">{formData.price.message}</div>
                            <div>
                                <FormInput
                                    {...formData.imgUrl}
                                    onTurnDirty={handleTurnDirty}
                                    className="dsc-form-control"
                                    onChange={handleInputChange}
                                />
                            </div>
                            {/* <div>
                                <select className="dsc-form-control dsc-select" required>
                                    <option value="" disabled selected>Categorias</option>
                                    <option value="1">Valor 1</option>
                                    <option value="2">Valor 2</option>
                                </select>
                            </div> */}
                            <div>
                                {/* <textarea className="dsc-form-control dsc-textarea" placeholder="Descrição"></textarea> */}
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
