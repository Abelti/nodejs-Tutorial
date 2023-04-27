const EventEmitter = require ('node:events')
//event module reurs a class event emitter which encapsulates functionlaity to emit events and respond to events

const emitter = new EventEmitter(); // initiating the event emitter class instance 

emitter.on('order-pizza', (size, topping) => {
    console.log(`Order received. Baking a ${size} pizza with ${topping} toppings!`)
}); //register the order-pizza event listener for the order-pizza event

emitter.on('order-pizza', (size) => {
    if(size === 'large') {
        console.log('serving complementary drinks');
    }
});

emitter.emit('order-pizza', 'large', 'mushroom'); //broadcast the order-pizza event

// a listner is a callback function that gets executed when the corresponding event is emitted
//multiple listeners for the same event