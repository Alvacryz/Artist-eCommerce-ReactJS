import {useState, useEffect} from 'react'
import {useParams} from 'react-router';

import {getProducts} from './Utils/Promises.js';

import '../styles/CardDetail.css'

import ItemDetail from './ItemDetail.jsx'

const ContainerDetail = () => {
  const [producto, setProducto] = useState({})
  const [loading, setLoading] = useState(true)

  const {id} = useParams()

  useEffect( () => {
    getProducts.then((res) => {
      setProducto(res.find((i) => parseInt(id) === i.id));
      setLoading(false);
    });
  }, [id]);

    return(
      <>
      {loading ? <h2 className='loading'>Cargando Detalles...</h2>:
      <div className='cardDetailContainer'>
        <ItemDetail producto={producto} />
      </div>}
      </>
    )
} 

export default ContainerDetail