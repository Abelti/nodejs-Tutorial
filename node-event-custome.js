// our own event emitter class

//using event module
//inheritance




const PizzaShop = require('./pizzashop');
const Drink = require('./drink');

const pizzaShop = new PizzaShop();
const drink = new Drink();

pizzaShop.on('order', (size, topping) => {
    console.log(`Baking ${size} pizza with ${topping}`);
    drink.serveDrink(size);
});

pizzaShop.order('large', 'beef');
pizzaShop.displayOrderNumber();