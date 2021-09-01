import Item from './Item.jsx'

const Items = ({items}) => items.map((item) => 
<Item key={item.id} item={item} />
)

export default Items