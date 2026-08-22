
// rfce + tab => crea componente

import React from 'react'
import Counter from './components/Counter/Counter.jsx'
import NavBar from './components/NavBar/NavBar.jsx'
import ProductCard from './components/ProductCard/ProductCard.jsx'
import './App.css'
function App() {
    const name = "Nicolas";
    const age = 21;
    const expression = "My Template Literals Expression";
  
    return (
      <div>
        <NavBar
          title="Soy un title desde una prop!"
          subtitle="Soy un subtitle desde una prop!"
        />
        <NavBar title="Semana 2" subtitle="JSX, Componentes y State" />
        <NavBar />
        <Counter />
        <div className="container">
          <h1>Clase 02 React</h1>
          <h2>Subtitle</h2>
          <p>User Name: {name.toUpperCase()}</p>
          <p>User Age + 5: {age + 5}</p>
          <p>{`string text ${expression} string text`}</p>
        </div>
        <ProductCard />
      </div>
    );
  };


export default App
