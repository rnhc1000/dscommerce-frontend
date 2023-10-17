import './styles.css';
import cartIcon from '../../assets/cart.svg';
import { useContext } from 'react';
import { ContextCartCount } from '../../utils/contex-cart';
export default function CartIcon() {

    const {contextCartCount} = useContext(ContextCartCount);
    
    
    return (

        <>
            <img src={cartIcon} alt="Carrinho de compras"></img>
            <div className="dsc-cart-count">{contextCartCount}</div>
        </>

    );
}