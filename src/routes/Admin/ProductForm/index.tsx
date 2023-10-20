import './styles.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import FormInput from '../../../components/FormInput';
import * as forms from '../../../utils/forms';

export default function ProductForm() {

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
        },
        imgUrl: {
            value: "",
            id: "imgUrl",
            name: "imgUrl",
            type: "text",
            placeholder: "Imagem",
        }
    });


    function handleInputChange(event: any) {
        const value = event.target.value; // valor da caixa
        const name = event.target.name; // nome da caixa
        setFormData(forms.update(formData, name, value))
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
                                    className="dsc-form-control"
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <FormInput
                                    {...formData.price}
                                    className="dsc-form-control"
                                    onChange={handleInputChange}
                                />

                            </div>
                            <div>
                                <FormInput
                                    {...formData.imgUrl}
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