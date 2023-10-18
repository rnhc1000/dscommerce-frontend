import './styles.css';
import homeSvg from '../../assets/home.svg';
import productImg from '../../assets/products.svg';

export default function HeaderAdmin() {
    return (
        <>
        <header className="dsc-header-admin">
            <nav className="dsc-container">
                <h1>DSC Admin</h1>
                <div className="dsc-nav-bar-right">
                    <div className="dsc-menu-items-container">
                        <div className="dsc-menu-item">
                            <img src={homeSvg} alt="Início" />
                            <p>Início</p>
                        </div>
                        <div className="dsc-menu-item">
                            <img src={productImg} alt="Cadastro de produtos" />
                            <p className="dsc-menu-item-active">Produtos</p>
                        </div>
                    </div>
                    <div className="dsc-logged-user">
                        <p>Maria Silva</p>
                        <a href="#">Sair</a>
                    </div>
                </div>
            </nav>
        </header>

          </>
    );
}