import React from "react";
import { Component } from "react";
import CounterButton from "../counterButton/CounterButton";
import "./Counter.css";


class Counter extends Component {
    constructor() {
        super();
    
        //Arrow function avoid us to bind the method
        //this.increment = this.increment.bind(this);  
    
        //Define the initial state in a constructor
        //state => counter 0
        this.state = {
          value : 0
        }
    }

    //Arrow function avoid us to bind the method
    increment = (value) => { //Update state - counter++
        this.setState(
            (prevState) => {
                return {value : prevState.value + value}
            }
        )
    }

    decrement = (value) => {
        this.setState(
            (prevState) => {
                return {value : prevState.value - value }
            }
        )
    }

    reset = () => {
        this.setState(            
            {
                value : 0
            }
        )
    }


    render() {
        return (
            <div className="mainDiv">
                <div className="countDiv">
                    <CounterButton count={this.increment} type="+"/>
                    <CounterButton count={this.increment} by={5} type="+"/>
                    <CounterButton count={this.increment} by={10} type="+"/>
                </div>
                <div className="countDiv">
                    <CounterButton count={this.decrement} type="-"/>
                    <CounterButton count={this.decrement}by={5} type="-"/>
                    <CounterButton count={this.decrement}by={10} type="-"/>
                </div>
                <div className="countTotal">
                    <span>{this.state.value}</span>            
                </div>
                <div>
                    <button className="reset" onClick={this.reset}>Reset</button>
                </div>
            </div>
        )
    }

}

export default Counter;