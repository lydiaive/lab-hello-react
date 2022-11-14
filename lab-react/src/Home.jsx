import './Home.css'
import logo from './images/ironhack-logo-xs.png'
import menuebar from './images/menu-top-xs.png'
import icon1 from './images/icon1.png'
import icon2 from './images/icon2.png'
import icon3 from './images/icon3.png'
import icon4 from './images/icon4.png'


function Home() {
    return (
      <div className="home">
        <section className="header-container card">
            <nav className="nav-bar">
                <img src={logo} alt="logo"></img>
                <img src={menuebar} alt="menue"></img>
            </nav>
            <div className="headline-container">
                <h1>Say hello to ReactJS</h1>
                <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
                <button>Awesome!</button>
            </div>
        </section>
        <section className="benefit-container card">
            <div className="benefit-item">
                <img src={icon1} alt="declarative icon"></img>
                <h2>Declarative</h2>
                <p>React makes it painless to create interactive UIs.</p>
            </div>
            <div className="benefit-item">
                <img src={icon2} alt="components icon"></img>
                <h2>Components</h2>
                <p>Build encapsulated components that manage their state.</p>
            </div>
            <div className="benefit-item">
                <img src={icon3} alt="single-way icon"></img>
                <h2>Single-Way</h2>
                <p>A set of immutable values are passed to the component's.</p>
            </div>
            <div className="benefit-item">
                <img src={icon4} alt="jsx icon"></img>
                <h2>JSX</h2>
                <p>Statically-typed, designed to run on modern browsers</p>
            </div>
        </section>
      </div>
    );
  }
  
  export default Home;