import {useState, useEffect} from 'react'
import {useParams} from 'react-router';
import { db } from '../service/getFirebase.jsx';
import { onSnapshot, collection, query } from '@firebase/firestore';
import { where } from '@firebase/firestore';

import '../styles/CardDetail.css'

import ItemDetail from './ItemDetail.jsx'

const ContainerDetail = () => {
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);

  const {id} = useParams();
  const idstring = parseInt(id);

  const queryDB = query(collection(db, "items"), where("id", "==", idstring)) 

  useEffect(() => {
    onSnapshot( queryDB , (res) => {
      res.forEach( (i) => {
        setProducto(i.data());
      });
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