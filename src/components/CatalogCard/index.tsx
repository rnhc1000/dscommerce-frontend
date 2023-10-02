
import './styles.css';
import computer from '../../assets/computer.png';
export default function CatalogCard() {
    return (
        <div className="dsc-card">
        <div className="dsc-catalog-card-top dsc-line-bottom">
            <img src={ computer } alt="computer" />

        </div>
        <div className="dsc-catalog-card-bottom">

            <h3>R$ 5000,00</h3>
            <h4>Computador Gamer XT com suporte e 16GB de memória e processador turbo plus</h4>

        </div>
    </div>

    );
}