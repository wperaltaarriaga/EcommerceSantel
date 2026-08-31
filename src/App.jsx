import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'

function App() {
  const greeting = "Mates para acompañar cada momento"

  return (
    <>
      <NavBar />
      <ItemListContainer greeting={greeting} />
    </>
  )
}

export default App