import {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail.jsx'
import ItemCount from './Item Counter/ItemCount.jsx';
import {getProduct} from './Utils/Promises.js';

const ContainerDetail = () => {
  const [producto, setProducto] = useState({})
  const [loading, setLoading] = useState(true)
    
  useEffect( () => {
    getProduct.then(res => {
        setProducto(res)
        setLoading(false)
      }) 
    }, [])

    return(
      <>
      {loading ? <h2 className='loading'>Cargando Detalles...</h2>:
      <div className='cardDetailContainer'>
        <ItemDetail producto={producto} />
        <ItemCount initial={1} stock={producto.stockNumber}/>
      </div>}
      </>
    )
} 

export default ContainerDetail