const items=[
    {
        id: 1, 
        name:'Sample Name #1', 
        price:'10', 
        desc:'Sample Text', 
        image:'', 
        stockNumber:'10',
    },
    {
        id: 2, 
        name:'Sample Name #2', 
        price:'20', 
        desc:'Sample Text', 
        image:'', 
        stockNumber:'5',
    },
    {
        id: 3, 
        name:'Sample Name #3', 
        price:'30', 
        desc:'Sample Text', 
        image:'', 
        stockNumber:'2',
    },
];  

export const getProducts = new Promise((resolve) => {
    setTimeout(() => {
      resolve(items);
    }, 2000);
  });

const item = {
    id: 1,
    name:'Title #1',
    price:'10',
    desc:'Lengthy sample text of the Item...',
    image:'https://cdn.discordapp.com/attachments/747943291386986571/884429469392191518/1134418-200.png',
    stockNumber:'10',
  }


export const getProduct = new Promise((resolve) => {
    setTimeout(() => {
      resolve(item);
    }, 4000);
  });




