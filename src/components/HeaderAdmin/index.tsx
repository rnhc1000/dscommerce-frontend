import './styles.css';
import homeSvg from '../../assets/home.svg';
import productImg from '../../assets/products.svg';
// import { useEffect, useState } from 'react';
// import { userDTO } from '../../models/user';
// import * as userService from '../../services/user-service';
import LoggedUser from '../LoggedUser';
import { NavLink } from 'react-router-dom';

export default function HeaderAdmin() {

    // const[user, setUser] = useState<userDTO>();

    // useEffect(() => {
    //     userService.findMe()
    //     .then(response => {
    //         setUser(response.data);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     })
    // }, [])

    return (
        <>
            <header className="dsc-header-admin">
                <nav className="dsc-container">
                    <h1>DSC Admin</h1>
                    <div className="dsc-nav-bar-right">
                        <div className="dsc-menu-items-container">
                            <NavLink to="/admin/home" className={({...isActive})=> isActive ? "dsc-menu-item-active" : ""}>
                                <div className="dsc-menu-item">
                                    <img src={homeSvg} alt="Início" />
                                    <p>Início</p>
                                </div>
                            </NavLink>
                            <NavLink to="/admin/products" className={({...isActive})=> isActive ? "dsc-menu-item-active" : ""}>
                                <div className="dsc-menu-item">
                                    <img src={productImg} alt="Cadastro de produtos" />
                                    <p>Produtos</p>
                                </div>
                            </NavLink>
                        </div>
                        <LoggedUser />
                    </div>
                </nav>
            </header>
        </>
    );
}