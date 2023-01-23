import './App.css';
import './GL-cards/btn-burger/burger.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Menu, Container, AboutUs, Сontacts, Footer, Burger } from './GL-cards'



function App() {

  const items = [
    { value: 'Главное', href: '/', },
    { value: 'О нас', href: '/about', },
    { value: 'Контакты', href: '/contacts', },
  ];
  const [clickedBurger, setClickedBurger] = React.useState()

  const ClickedSection = () => {
    setClickedBurger(!clickedBurger)
    console.log(clickedBurger)
  }


  return (
    <div className='gl-container-main'>
      <Menu items={items} ClickedSection={ClickedSection} clickedBurger={clickedBurger} />
      <div className={clickedBurger ? 'burger active' : 'burger'}>
        <Burger items={items} clickedBurger={clickedBurger} ClickedSection={ClickedSection} setClickedBurger={setClickedBurger} />
      </div>
      <div className="App">
        <div className='Container--main-top'>
          <div className='Container--main'>
            <Routes>
              <Route path="/" element={<Container />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contacts" element={<Сontacts />} />
              Footer
            </Routes>
            <Footer items={items} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
