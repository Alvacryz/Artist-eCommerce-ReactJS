import sample from '../../img/sample-img.png'

const items=[
  // Portrait Items
    {
        id: 1, 
        name:'Face Portrait Sketch', 
        price:'10', 
        desc:'A simple sketch of the face area for your convenience.', 
        image:sample, 
        stock:'3',
        type: 'head',
        color: 'none'
    },
    {
        id: 2, 
        name:'Face Portrait Simple', 
        price:'15', 
        desc:'Sample Text 2', 
        image:sample, 
        stock:'5',
        type: 'head',
        color: 'simple'
    },
    {
        id: 3, 
        name:'Face Portrait Full', 
        price:'20', 
        desc:'Sample Text 3', 
        image:sample, 
        stock:'7',
        type: 'head',
        color: 'full'
    },
  // Half-Body Items
    {
        id: 4, 
        name:'Half-Body Sketch', 
        price:'20', 
        desc:'Sample Text', 
        image:sample, 
        stock:'2',
        type: 'upper',
        color: 'none'
    },
    {
        id: 5, 
        name:'Half-Body Simple', 
        price:'25', 
        desc:'Sample Text', 
        image:sample, 
        stock:'4',
        type: 'upper',
        color: 'simple'
    },
    {
        id: 6, 
        name:'Half-Body Full', 
        price:'30', 
        desc:'Sample Text', 
        image:sample, 
        stock:'6',
        type: 'upper',
        color: 'full'
    },
  // Full-Body Items
    {
        id: 7, 
        name:'Full-Body Sketch', 
        price:'30', 
        desc:'Sample Text', 
        image:sample, 
        stock:'1',
        type: 'full',
        color: 'none'
    },
    {
        id: 8, 
        name:'Full-Body Simple', 
        price:'35', 
        desc:'Sample Text', 
        image:sample, 
        stock:'2',
        type: 'full',
        color: 'simple'
    },
    {
        id: 9, 
        name:'Full-Body Full', 
        price:'40', 
        desc:'Sample Text', 
        image:sample, 
        stock:'3',
        type: 'full',
        color: 'full'
    },
    {
        id: 10, 
        name:'Illustration', 
        price:'XX', 
        desc:'Sample Text', 
        image:sample, 
        stock:'1',
        type: 'illustration',
    },
];  

export const getProducts = new Promise((resolve) => {
    setTimeout(() => {
      resolve(items);
    }, 2000);
  });