function errorHandler(error){
    const { name,message,stack} = error;
    console.log(name,message);

    // logger.error({
    //     name,
    //     message,
    //     stack
    // })
    // console.log('Internal server error');
}


function two(){
    console.log('Ki obossta batija TWo');
}

// Export Rule One
module.exports.errorHandler = errorHandler;
module.exports.two = two;

// Export Rule Two
module.exports = {
    errorHandler:errorHandler,
    two:two
}

// Export Rule Three
module.exports = {
    errorHandler,
    two
}


// Export Rule Four
module.exports.two= function two(){
    console.log('Ki obossta batija TWo');
}


console.log(module);