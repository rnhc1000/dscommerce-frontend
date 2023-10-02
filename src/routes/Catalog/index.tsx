import './styles.css';
import computer from '../../assets/computer.png';
import HeaderClient from '../../components/HeaderClient';
export default function Catalog() {

    return (
        <>
        <HeaderClient />
            <main>
                <section id="dsc-catalog-section" className="dsc-container">
                    <form className="dsc-search-bar">
                        <button type="submit">🔎︎</button>
                        <input type="text" placeholder="Nome do Produto" />
                        <button type="reset">&#x2613;</button>
                    </form>

                    <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
                        <div className="dsc-card">
                            <div className="dsc-catalog-card-top dsc-line-bottom">
                                <img src={computer} alt="computer" />

                            </div>
                            <div className="dsc-catalog-card-bottom">

                                <h3>R$ 5000,00</h3>
                                <h4>Computador Gamer XT com suporte e 16GB de memória e processador turbo plus</h4>

                            </div>
                        </div>
                        <div className="dsc-card">
                            <div className="dsc-catalog-card-top dsc-line-bottom">
                                <img src={ computer} alt="computer"></img>

                            </div>
                            <div className="dsc-catalog-card-bottom">

                                <h3>R$ 5000,00</h3>
                                <h4>Computador Gamer XT com suporte e 16GB de memória e processador turbo plus</h4>

                            </div>
                        </div>
                        <div className="dsc-card">
                            <div className="dsc-catalog-card-top dsc-line-bottom">
                                <img src={ computer} alt="computer" />

                            </div>
                            <div className="dsc-catalog-card-bottom">

                                <h3>R$ 5000,00</h3>
                                <h4>Computador Gamer XT com suporte e 16GB de memória e processador turbo plus</h4>

                            </div>
                        </div>
                        <div className="dsc-card">
                            <div className="dsc-catalog-card-top dsc-line-bottom">
                                <img src={ computer} alt="computer" />

                            </div>
                            <div className="dsc-catalog-card-bottom">

                                <h3>R$ 5000,00</h3>
                                <h4>Computador Gamer XT com suporte e 16GB de memória e processador turbo plus</h4>

                            </div>
                        </div>
                        <div className="dsc-card">
                            <div className="dsc-catalog-card-top dsc-line-bottom">
                                <img src={ computer} alt="computer" />

                            </div>
                            <div className="dsc-catalog-card-bottom">

                                <h3>R$ 5000,00</h3>
                                <h4>Computador Gamer XT com suporte e 16GB de memória e processador turbo plus</h4>

                            </div>
                        </div>
                        <div className="dsc-card">
                            <div className="dsc-catalog-card-top dsc-line-bottom">
                                <img src={ computer} alt="computer" />

                            </div>
                            <div className="dsc-catalog-card-bottom">

                                <h3>R$ 5000,00</h3>
                                <h4>Computador Gamer XT com suporte e 16GB de memória e processador turbo plus</h4>

                            </div>
                        </div>
                        <div className="dsc-card">
                            <div className="dsc-catalog-card-top dsc-line-bottom">
                                <img src={ computer} alt="computer" />

                            </div>
                            <div className="dsc-catalog-card-bottom">

                                <h3>R$ 5000,00</h3>
                                <h4>Computador Gamer XT com suporte e 16GB de memória e processador turbo plus</h4>

                            </div>
                        </div>
                        <div className="dsc-card">
                            <div className="dsc-catalog-card-top dsc-line-bottom">
                                <img src={ computer} alt="computer" />

                            </div>
                            <div className="dsc-catalog-card-bottom">

                                <h3>R$ 5000,00</h3>
                                <h4>Computador Gamer XT com suporte e 16GB de memória e processador turbo plus</h4>

                            </div>
                        </div>
                        <div className="dsc-card">
                            <div className="dsc-catalog-card-top dsc-line-bottom">
                                <img src={ computer} alt="computer" />

                            </div>
                            <div className="dsc-catalog-card-bottom">

                                <h3>R$ 5000,00</h3>
                                <h4>Computador Gamer XT com suporte e 16GB de memória e processador turbo plus</h4>

                            </div>
                        </div>
                        <div className="dsc-card">
                            <div className="dsc-catalog-card-top dsc-line-bottom">
                                <img src={ computer} alt="computer" />
                            </div>
                            <div className="dsc-catalog-card-bottom">

                                <h3>R$ 5000,00</h3>
                                <h4>Computador Gamer XT com suporte e 16GB de memória e processador turbo plus</h4>

                            </div>
                        </div>
                        <div className="dsc-card">
                            <div className="dsc-catalog-card-top dsc-line-bottom">
                                <img src={ computer} alt="computer" />
                            </div>
                            <div className="dsc-catalog-card-bottom">

                                <h3>R$ 5000,00</h3>
                                <h4>Computador Gamer XT com suporte e 16GB de memória e processador turbo plus</h4>

                            </div>
                        </div>
                        <div className="dsc-card">
                            <div className="dsc-catalog-card-top dsc-line-bottom">
                                <img src={ computer} alt="computer" />
                            </div>
                            <div className="dsc-catalog-card-bottom">

                                <h3>R$ 5000,00</h3>
                                <h4>Computador Gamer XT com suporte e 16GB de memória e processador turbo plus</h4>

                            </div>
                        </div>
                    </div>

                    <div className="dsc-btn-next-page">
                        Carregar mais
                    </div>

                </section>
            </main>
        </>
    );
}