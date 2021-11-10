import React,  { Component } from 'react';
import PropTypes from 'prop-types';
import './CounterButton.css';


class CounterButton extends Component{  

    render = () => {
        const buttonLabel = this.props.type + this.props.by;

        return (
        <div className="count">
            <button onClick={() => this.props.count(this.props.by)}>{buttonLabel}</button>                        
        </div>
        ) 
    }
}

//default props
CounterButton.defaultProps = {
    by : 1
}

//Props type
CounterButton.propTypes = {
    by : PropTypes.number
}
   

export default CounterButton;