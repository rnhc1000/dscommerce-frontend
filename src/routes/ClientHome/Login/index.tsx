import './styles.css';
import { useContext, useState } from 'react';
import { CredentialsDTO } from '../../../models/auth';
import * as authService from '../../../services/auth-service';
import { useNavigate } from 'react-router-dom';
import { ContextToken } from '../../../utils/context-token';
import FormInput from '../../../components/FormInput';
import * as forms from '../../../utils/forms';


export default function Login() {
    // const [formData, setFormData] = useState<CredentialsDTO>({
    //     username: "",
    //     password: ""
    // });

    const [formData, setFormData] = useState<any>({
        username: {
            value: "",
            id: "username",
            name: "username",
            type: "text",
            placeholder: "Email",
            validation: function (value: string) {
                return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value.toLowerCase());
            },
            message: "Favor informar um email válido",
        },
        password: {
            value: "",
            id: "password",
            name: "password",
            type: "password",
            placeholder: "Senha",
        }
    });

    const navigate = useNavigate();

    const [submitResponseFail, setSubmitResponseFail] = useState(false);

    const { setContextTokenPayload } = useContext(ContextToken);

    function handleSubmit(event: any) {
        event.preventDefault();

        setSubmitResponseFail(false);
        const formDataValidated = forms.dirtyAndValidateAll(formData);
        if (forms.hasAnyInvalid(formDataValidated)) {
            setFormData(formDataValidated);
            console.log("erro......")
            return;
        }

        authService.loginRequest(
            forms.toValues(formData)
            // username: formData.username.value,
            // password: formData.password.value
        )
            .then(response => {
                authService.saveAccessToken(response.data.access_token);
                console.log(response.data);
                console.log(authService.getAccessTokenPayload()?.user_name);
                setContextTokenPayload(authService.getAccessTokenPayload());
                navigate("/cart");
            })
            .catch(error => {
                setSubmitResponseFail(true);
                console.log("Erro no login", error)
            })
        // loginRequest(formData)
    }

    // function handleInputChange(event: any) {
    //     const value = event.target.value; // valor da caixa
    //     const name = event.target.name; // nome da caixa
    //     // setFormData({ ...formData, [name]: { ...formData[name], value: value } });
    //     setFormData(forms.update(formData, name, value))
    // }

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
        <>
            <main>
                <section id="login-section" className="dsc-container">
                    <div className="dsc-login-form-container">
                        <form className="dsc-card dsc-form" onSubmit={handleSubmit}>
                            <h2>Login</h2>
                            <div className="dsc-form-controls-container">
                                <div>
                                    <FormInput
                                        {...formData.username}
                                    // name="username"
                                    // value={formData.username.value}
                                    className="dsc-form-control"
                                    // type="text"
                                    // placeholder="Email"
                                    onTurnDirty={handleTurnDirty}
                                    onChange={handleInputChange}
                                    />
                                    <div className="dsc-form-error">{formData.username.message}</div>
                                </div>
                                <div>
                                    <FormInput
                                        {...formData.password}
                                    // name="password"
                                    // value={formData.password.value}
                                    className="dsc-form-control"
                                    // type="password"
                                    // placeholder="Senha"
                                    onTurnDirty={handleTurnDirty}
                                    onChange={handleInputChange}
                                    />          
                                </div>
                            </div>
                            {
                                submitResponseFail && 
                                <div className="dsc-form-global-error">
                                    Usuário ou senha inválidos!
                                </div>
                            }

                            <div className="dsc-login-form-buttons dsc-mt20">
                                <button type="submit" className="dsc-btn dsc-btn-blue">Entrar</button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>

        </>
    );
}