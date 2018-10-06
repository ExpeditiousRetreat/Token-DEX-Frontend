import getWeb3 from './utils/getWeb3'
import getAccounts from './utils/getAccounts'
import React from 'react';
import ReactDOM from 'react-dom';
import './foundation.min.css';

export default class Exchange extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {

        return (
            <div className= "main-middle">
                <row>
                    <div className="large-6 columns window orders">
                        love
                    </div>
                    <div className="large-6 columns window user-tokens">
                        love
                    </div>
                </row>
                <row>
                    <div className="large-6 columns window graph">
                        love
                    </div>
                    <div className="large-6 columns window recent-trades">
                        love
                    </div>
                </row>
            </div>
        )
    }

}
