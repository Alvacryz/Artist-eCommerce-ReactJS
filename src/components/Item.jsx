const Item = ({item}) => {
    return(
        <div className='itemCard'>
            <img src={item.image} alt="" />
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
            <p>{item.price}</p>
            <button>Buy this</button>
        </div>
    )
}

export default Item