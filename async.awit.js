const promise = new Promise((resolve, rejected)=>{
setTimeout(()=>{
    resolve('success')
},500)
})

async function getData(){
  const res = promise.then(res=>{
    console.log(res);
  });
  
}
getData()



// fetch('')
// .then((res)=>res.json())
// .then((data)=>console.log(data))

// normal fetch conver async function
async function userData(){
    const res = await fetch('ffdg')
    const data = await res.json();
const res2 = await fetch(`httt://www.example.com${data.id}`);
const product = res2.json();
console.log(product);
}

