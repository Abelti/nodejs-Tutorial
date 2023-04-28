const EventEmitter = require('node:events');

class PizzaShop  extends EventEmitter {
    constructor () {
        super();
        this.orderNumber = 0;
    }

    order(size, topping) {
        this.orderNumber++;
        const click = onclick(key === '13');
        this.emit(toString(click), size, topping);
    }

    displayOrderNumber() {
        console.log(`Current order number: ${this.orderNumber}`)
    }
}

module.exports = PizzaShop;