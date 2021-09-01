import {useState, useEffect} from 'react'
import './Navigation Bar/NavBar.css'
import './Item Counter/ItemCount.css'
import Items from './ItemList.jsx'
import ItemCount from './Item Counter/ItemCount.jsx'
import {getItems} from './Promise.jsx'

const Intro = ({nombre, texto}) => {

  // Si hay stock, ejecutara esta acción:
  const onAdd =(count)=>{
    console.log(`La cantidad de items comprados es: ${count}`)
    alert(`You purchased ${count} items!`)
  }
  // De no ser asi, se ejectuara esta acción:
  function onAddError(){
    console.log('No hay stock. Refresca la página.')
    alert('There is no stock available!')
  }

  const [productos, setProducto] = useState({})
  const [loading, setloading] = useState(true)
    
  useEffect(() => {
    getItems.then(item => {
        setProducto(item)
        setloading(false)
      }) 
    })

    return (
        <>
        <h2>{texto}, {nombre}</h2>

        {
        loading ? 
        <h2 className='loading'>Cargando Productos...</h2>:
        <div className='cardContainer'>
          <Items items={productos} />
        </div>
        }
        
        <ItemCount initial={1} stock={10} onAdd={onAdd} onAddError={onAddError} />
        </>
    )
  }

export default Intro