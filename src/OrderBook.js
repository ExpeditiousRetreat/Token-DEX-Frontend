import React from 'react';
import ReactDOM from 'react-dom';
import './foundation.min.css';
import ReactList from 'react-list';


export default class OrderBook extends React.Component {
    constructor() {
        super()
        this.state = {
            orders: ["order1","order2","order3"] //populate with test data
        }
    }

    renderOrder = (index,key) => {
        const styling = {
            backgroundColor: index % 2 == 0 ? "#d3d3d3": "white"
        };
        return <div key={key} style={styling}>{this.state.orders[index]}</div>;
    }

    render() {
        return (
            <div>
                <h1>Orders</h1>
                <ReactList
                    itemRenderer={this.renderOrder}
                    length={this.state.orders.length}
                    type='uniform'
                />
            </div>
        )
    }

}
