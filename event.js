const events =require('events');

// create EventEmitter
const eventEmitter = new events.EventEmitter();


// create handle
const handle = () =>{
    console.log('Tue koi..ami Daray asi');
}

//assgin the handler into on event
eventEmitter.on('screma', handle).handle;

//fire the  events
eventEmitter.emit('screma')
