import { Link } from 'react-router-dom';
import './styles.css';
import CartIcon from '../CartIcon';

export default function HeaderClient() {
    return (
        <header className="dsc-header-client">
            <nav className="dsc-container">
                <Link to={'/'}>
                    <h1>DSCommerce</h1>
                </Link>
                <div className="dsc-nav-bar-right">
                    <div className="dsc-menu-items-container">
                        <Link to={'/cart'}>
                            <div className="dsc-menu-item">
                                <CartIcon />
                            </div>
                        </Link>
                        <Link to={'/login'}>
                            Entrar
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}