import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './foundation.min.css';
import Exchange from "./Exchange.js"


class App extends React.Component {

    constructor(props){
        super(props);

    }


    render() {
        return (
            <div className="main-outer">
                <div className= "main-middle">
                    <div className="main-container">
                        "blah"
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
