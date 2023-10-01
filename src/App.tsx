import './App.css'
import computer from './assets/computer.png';
import cart from './assets/cart.svg';

function App() {
 
  return (
    <><header className="dsc-header-client">
      <nav className="dsc-container">
        <h1>DSCommerce</h1>
        <div className="dsc-nav-bar-right">
          <div className="dsc-menu-items-container">
            <div className="dsc-menu-item">
              <img src={ cart } alt="Carrinho de compras"></img>
              </div>
            <a href="#">Entrar</a>
          </div>
        </div>
      </nav>
    </header><main>
        <section id="product-details-section" className="dsc-container">
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
                <div className="dsc-category">
                  Eletrônicos
                </div>
                <div className="dsc-category">
                  Computadores
                </div>
              </div>
            </div>
          </div>
          <div className="dsc-btn-page-container">
            <div className="dsc-btn dsc-btn-blue">
              Comprar
            </div>
            <div className="dsc-btn dsc-btn-white">
              Inicio
            </div>
          </div>
        </section>
      </main></>
  )

}

export default App
