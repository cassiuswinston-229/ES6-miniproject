class Inventory {
    constructor(_name, _initial, _sold){
        this.name = _name;
        this.sold = _sold;
        this.initial = _initial;
    }
    getStock(){
        let stock = this.initial - this.sold;
        return stock;
    }
    inventoryDescription(){
        console.log('${this.sold} of ${this.name} have sold, there are ${stock} left.');
    }
}
class Clothing extends Inventory{
    constructor(_name,_color, _initial, _sold){
       super(_name, _initial, _sold);
       this.color = _color;
    }
}
class Food extends Inventory{
    constructor(_name, _type, _initial, _sold){
        super(_name, _initial, _sold);
        this.type = _type;
    }
}



let apples = new Food ('Apples', 100, 24);
let carrots = new Food ('Carrots', 75, 17);
let shirt = new Clothing ('Shirt', 'blue', 80, 31);
let pants = new Clothing ('Pants', 'green', 80, 23);
console.log(apples.inventoryDescription);
console.log(carrots.inventoryDescription);