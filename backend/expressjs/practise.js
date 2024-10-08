var ax=require('axios');
console.log('hello');
setTimeout(()=>{console.log('seterfunctiond')},2000);
console.log('bye');
fetch('https://fakestoreapi.com').then((res)=>{console.log(res)})

// ax.get('https://fakestoreapi.com/products').then((res)=>{console.log(res);})