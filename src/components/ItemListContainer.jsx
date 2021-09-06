import {useState, useEffect} from 'react'
import './Navigation Bar/NavBar.css'
import Items from './ItemList.jsx'
import { getProducts } from './Utils/Promises';

const ContainerItem = () => {

  const [productos, setProducto] = useState({})
  const [loading, setLoading] = useState(true)
    
  useEffect(() => {
    getProducts.then(res => {
        setProducto(res)
        setLoading(false)
      }) 
    })

    return (
        <>
        {loading ? <h2 className='loading'>Cargando Productos...</h2>
        :
        <div className='cardContainer'>
          <Items items={productos} />
        </div>}
        </>
    )
  }

export default ContainerItem