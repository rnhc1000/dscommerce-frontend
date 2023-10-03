import './styles.css';

export default function HeaderPortfolio() {
    return (
        <header className="nav-container">
        <nav id="navbar" className="nav-main">
          <ul className="nav-list">
            <li><a href="#welcome-section">Home</a></li>
            <li><a href="#project-section">Projects</a></li>
            <li><a href="#skill-section">Skills</a></li>
            <li><a href="#contact-section">Contact</a></li>
          </ul>
        </nav>
      </header>
    
    );
}