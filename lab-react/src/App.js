import './App.css';
import BenefitItem from './components/Benefits/BenefitItem';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Home from './components/Home'
import Navbar from './components/Nav-Bar/Navbar';

import icon1 from './images/icon1.png'
import icon2 from './images/icon2.png'
import icon3 from './images/icon3.png'
import icon4 from './images/icon4.png'

function App() {
  const benefitArr = [
    {
    icon: {icon1}.icon1,
    headline: 'Declarative',
    text: 'React makes it painless to create interactive UIs.'
  },
    {
    icon: {icon2}.icon2,
    headline: 'Components',
    text: 'Build encapsulated components that manage their state.'
  },
    {
    icon: {icon3}.icon3,
    headline: 'Single-Way',
    text: "A set of immutable values are passed to the component's"
  },
  {
    icon: {icon4}.icon4,
    headline: 'JSX',
    text: 'Statically-typed, designed to run on modern browsers.'
  }
  ]
  console.log(benefitArr)
  return (
    <div className="App">
      <Container className="header-container">
        <Navbar/>
        <Header/>
      </Container>
      <Container className="benefit-container ">
        <BenefitItem
          benefit={ benefitArr[0] }
        />
        <BenefitItem
          benefit={ benefitArr[1] }
        />
        <BenefitItem
          benefit={ benefitArr[2] }
        />
        <BenefitItem
          benefit={ benefitArr[3] }
        />
      </Container>
    </div>
  );
}

export default App;
