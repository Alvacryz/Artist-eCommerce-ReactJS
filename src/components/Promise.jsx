const items=[
    {id: 1, name:'Sample Name #1', price:'10', desc:'Sample Text', image:''},
    {id: 2, name:'Sample Name #2', price:'20', desc:'Sample Text', image:''},
    {id: 3, name:'Sample Name #3', price:'30', desc:'Sample Text', image:''},
  ];

  export const getItems = new Promise((resolve) => {
    console.log('Checking items...');
    setTimeout( () => {
        resolve(items);
        console.log(getItems);
      }, 2000);
  });