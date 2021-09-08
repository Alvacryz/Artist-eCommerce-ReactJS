import {useState, useEffect} from 'react'
import { useParams } from 'react-router';

import Items from './ItemList.jsx'
import { getProducts } from './Utils/Promises';

const ContainerItem = () => {

  const [productos, setProducto] = useState({})
  const [loading, setLoading] = useState(true)

  const {categoryid} = useParams()
    
  useEffect(() => {
    if(categoryid===undefined){
      getProducts.then(res => {
        setProducto(res)
        setLoading(false)
      })
    } else{
      getProducts.then(res => {
        setProducto(res.filter(r => categoryid===r.type))
      })
        setLoading(false)
    }
    }, [categoryid])

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