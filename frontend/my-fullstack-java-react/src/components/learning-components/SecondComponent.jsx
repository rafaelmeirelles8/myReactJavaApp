import React from 'react';

//Function Component 
function SecondComponent(props) {  
    return (
      <div className="SecondComponent">
        <h1>{props.title}</h1>
      </div>
    ) 
}
   

export default SecondComponent;