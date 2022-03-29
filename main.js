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

let button = document.querySelector("button")
let box = document.getElementById("changeMe")

function changeColor(){
    if(box.style.background == 'red'){
        box.style.background = 'green'
        
    }else{
        box.style.background = 'red'
    }
}
