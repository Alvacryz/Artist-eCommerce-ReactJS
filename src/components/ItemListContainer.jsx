import {useState, useEffect} from 'react'
import { useParams } from 'react-router';
import { db } from "../service/getFirebase.jsx"
import { onSnapshot, collection } from 'firebase/firestore';
import Items from './ItemList.jsx'

const ContainerItem = () => {

  const [productos, setProducto] = useState([])
  const [loading, setLoading] = useState(true)

  // Category ID for routing
  const {categoryid} = useParams()
    
  useEffect( () => {
    onSnapshot(collection(db, "items"), (resp) => {
      if(resp.size === 0){
        console.log('Firebase items response is empty!');
      } else{
        if(categoryid === undefined){
          setProducto(resp.docs.map( (i) => i.data() ));
        }
        else{
          let data = resp.docs.map( (i) => i.data() );
          setProducto(data.filter( (i) => i.type === categoryid));
        }
        setLoading(false)
      }
    })
    }, [categoryid])

    return (
        <>
        {
        loading ? <h2 className='loading'>Cargando Productos...</h2>
        :
        <div className='cardContainer'>
          <Items items={productos} />
        </div>
        }
        </>
    )
  }

export default ContainerItem