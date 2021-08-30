import NavBar from './components/NavBar.jsx'
import Intro from './components/ItemListContainer'
import ItemCount from './components/ItemCount.jsx'

function App() {

  return (
    <>
    <NavBar />
    <Intro 
    nombre = 'Placeholder.'
    texto='Welcome to the page'
    />
    </>
  )
}

export default App;
