const EventEmitter = require ('node:events');
const { emit } = require('node:process');
//event module returns a class event emitter which encapsulates functionality to emit events and respond to events

const emitter = new EventEmitter(); // initiating the event emitter class instance 

// emitter.on('order-pizza', (size, topping) => {
//     console.log(`Order received. Baking a ${size} pizza with ${topping} toppings!`)
// }); //register the order-pizza event listener for the order-pizza event

// emitter.on('order-pizza', (size) => {
//     console.log(`Baking a ${size} pizza`)}
// );

// emitter.off('order-pizza', () => {
// console.log('çlose')
// });

// emitter.on('order-pizza', (size) => {
//     if(size === 'large') {
//         console.log('serving complementary drinks');
//     }
// });

emitter.on('person', () => {
    console.log(`Hello person`);
});

emitter.on('person', (car) => {
    if (car === 'toyota') {
        console.log(`your car is ${car}`);
    } else if (car === 'bmw') {
        console.log(`your car is ${car}`);
    }
});

emitter.on('person', ( hi, lang) => {
    if (lang === 'js') {
        console.log(`you are a ${lang} developer`);
    } else if (lang === 'python') {
        console.log(`you are a ${lang} developer`);
    }
});



emitter.emit('order-pizza', 'large', 'mushroom'); //broadcast the order-pizza event
emitter.emit('person', 'bmw', 'python'); //broadcast the order-pizza event
// a listner is a callback function that gets executed when the corresponding event is emitted
//multiple listeners for the same event