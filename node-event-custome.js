// our own event emitter class

//using event module
//inheritance




const PizzaShop = require('./pizzashop');
const Drink = require('./drink');

const pizza = new PizzaShop(); //instance creation
const drink = new Drink();

pizza.on('click', (size, topping) => {
    console.log(`Baking ${size} pizza with ${topping}`);
    drink.serveDrink(size);
});

pizza.order('large', 'beef');
pizza.displayOrderNumber();