import { useState } from 'react';
import './ItemCount.css'
 
const ItemCount = ({onAdd, setDisplay, stock}) => {
    // States para los valores de la unidad del contador y la cantidad de stock:
    const [totalStock, setTotalStock] = useState(stock)
    const [count, setCount] = useState(1)

    // De no ser asi, se ejectuara esta acción:
    function onAddError(){
        console.log('No hay stock. Refresca la página.')
        alert('There is no stock available!')
    };
    
    // Aumentar la unidad del contador
    const handlerAdd = () =>{
        if(count < totalStock) setCount(count +1)
    }

    // Restar la unidad del contador
    const handlerRm = () =>{
        if(count > 1) setCount(count - 1)
    }   

    // Eventos al clickear el boton de comprar. La respuesta varia de si hay , o no, stock:
    const handlerOnAdd = () =>{
        if(totalStock > 0){
            onAdd(count)
            setCount(count)
            setTotalStock(totalStock - count)
            setDisplay(false)
        }  
        else{
            onAddError()
        } 
    }

    return (
        <div className = 'itemContainer'>
            <label className='labelStock'>Open Commission Slots: {totalStock}</label>
            <p>Quantity:</p>

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