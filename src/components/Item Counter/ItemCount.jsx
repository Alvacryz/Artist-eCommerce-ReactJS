import {useState} from 'react';
import './ItemCount.css'
 
const ItemCount = ({initial, stock}) => {

    // Si hay stock, ejecutara esta acción:
    const onAdd =(count)=>{
        console.log(`La cantidad de items comprados es: ${count}`)
        alert(`You purchased ${count} items!`)
    };
  
    // De no ser asi, se ejectuara esta acción:
    function onAddError(){
        console.log('No hay stock. Refresca la página.')
        alert('There is no stock available!')
    };

    // States para los valores de la unidad del contador y la cantidad de stock:
    const [count, setCount] = useState(initial)
    const [total, setTotal] = useState(stock)
    
    // Aumentar la unidad del contador
    const handlerAdd =()=>{
        if(count < total) setCount(count +1)
    }

    // Restar la unidad del contador
    const handlerRm =()=>{
        if(count > initial) setCount(count - 1)
    }   

    // Eventos al clickear el boton de comprar. La respuesta varia de si hay , o no, stock:
    const handlerOnAdd=()=>{
        if(total > 0){
            onAdd(count)
            setCount(initial)
            setTotal(total - count)
        }  
        else{
            onAddError()
        } 
    }

    return (
        <div className = 'itemContainer'>

            <label className='labelStock'>In Stock: {total}</label>

            <div className='itemCounter'>
                <button className='buttonCount' onClick={handlerAdd}>+</button>
                <label className='labelCount'>{count}</label>
                <button className='buttonCount' onClick={handlerRm}>-</button>
            </div>
            
            <button className='buttonBuy' onClick={handlerOnAdd}>Add to Cart</button>

        </div>           
    )
}

export default ItemCount