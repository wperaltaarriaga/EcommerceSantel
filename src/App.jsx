
// rfce + tab => crea componente

import React from 'react'
import '@fontsource/pinyon-script/400.css'
import './App.css'

//components
import ProductCard from './components/ProductCard/ProductCard.jsx'
import NavBar from './components/NavBar/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'

function App() {
  const greeting = "Mates para acompañar cada momento"

    return (
      <div>
        <NavBar/>
        <ItemListContainer greeting={greeting} />
        <ProductCard />
      </div>
    );
  };


export default App
