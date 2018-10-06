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
                    <Exchange />
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
