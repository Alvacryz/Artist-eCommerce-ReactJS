import './NavBar.css'
import ItemCount from './ItemCount.jsx'

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

    return (
        <>
        <h2>{texto}, {nombre}</h2>
        <ItemCount initial={1} stock={10} onAdd={onAdd} onAddError={onAddError} />
        </>
    )
}

export default Intro