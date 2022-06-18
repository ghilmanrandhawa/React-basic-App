import React from "react";
import ReactDOM from "react-dom";  

const App = (params) =>  {
    return (
        <div>
            <label className="label" for="name">Enter you name</label>
            <input id="name" />
            <button style={{backgroundColor: 'blue', color:'white'}}>Submit</button>
        </div>
    );
}

ReactDOM.render(
    <App/>,
    document.querySelector("#root")
)