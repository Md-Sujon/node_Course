// pending
// Resolve
// Rejected

const myPromise = new Promise((resolve, rejected)=>{
          const user = {id:3};
        if(!user){
            rejected("Something Wrong")
        }else{
            setTimeout(()=>{
                resolve("Johan");
             },1000)
        }      
})

const userId = [1,2,3,4,5]
const userD = [];

for(var i = 0; i<userId.length; i++){
    const userData = [i]
    userD.push(myPromise)
}
Promise.all(userD).then(res =>{
    console.log(res);
})



myPromise
.then(res=>{
    console.log(res);
})
.catch(error=>{
    console.log(error);
})
