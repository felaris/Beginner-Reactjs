import '../App.css';
const { Component } = require("react");


class Counter extends Component{
    constructor(){
        super();
        this.state ={

            counter: 0,
            value: 10,
        };

    }

    increment(){

    this.setState({

        counter : this.state.counter + this.state.value,
    });
    }
    decrement(){

    this.setState({

        counter : this.state.counter - this.state.value,
    });
    }
    multiply(){

    this.setState({

        counter : this.state.counter * this.state.value,
    });
    }
    divide(){

    this.setState({

        counter : this.state.counter / this.state.value,
    });
    }
    reset(){

    this.setState({

        counter : 0,
    });
    }



render(){
    return <>
    <p>Count Value is : {this.state.counter} </p>
    <button className="btn-custom" onClick={() =>  this.increment() }>Increase by 10</button>
    <button className="btn-custom" onClick={() =>  this.multiply() }>Multiply by 10</button>
    <button className="btn-custom" onClick={() =>  this.decrement() }>Decrease by 10</button>
    <button className="btn-custom" onClick={() =>  this.divide() }>Divide me by 10</button>
    <button className="btn-custom" onClick={() =>  this.reset() }>Reset me to 0</button>


</>

}


};


export default Counter;