const {errorHandler,two} = require('./ErrorMduel.js')

two();

async function getData(){
 try {
    // undefined.find()
    const newError = new Error("Email already exist");
    throw newError;
 } catch (error) {
   errorHandler(error)
 }
}

getData();






console.log('Done');