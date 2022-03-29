class Car{
    constructor(model, name){
        this.model = model;
        this.name = name;
    }

    start(){
        console.log(`Name of the Car: ${this.name}`)
    }
}

bmw = new Car (234, 'sports editing')
bmw.start()