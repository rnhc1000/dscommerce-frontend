import './styles.css';

import computer from '../../assets/computer.png';
import ProductCategory from '../ProductCategory';


export default function ProductDetailsCard() {

    return (
        <div className="dsc-card dsc-mb20">
            <div className="dsc-product-details-top dsc-line-bottom">
                <img src={computer} alt="computer"></img>
            </div>
            <div className="dsc-product-details-bottom">
                <h3>R$ 5.000,00</h3>
                <h4>Computador Gamer XT</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo quidem repellendus, sint eos
                    laboriosam architecto magni hic saepe consequatur quos ex, cum incidunt expedita facere nemo
                    rerum fugiat laborum? Nostrum?
                </p>
                <div className="dsc-category-container">
                <ProductCategory />
                <ProductCategory />
                </div>
                
            </div>
        </div>

    );
}