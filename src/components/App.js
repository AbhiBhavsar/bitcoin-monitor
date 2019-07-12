import React, { Component } from 'react';
import Display from './display/display';
import '../styles/main.scss';

class App extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron">
                    <div className="container">
                        <h1 className="display-3 text-center">Bitcoin Monitor</h1>
                        <p className="text-center">Get the most recent changes for the cryptocurrencies.</p>
                        {/* ======= Display Component ====== */}
                        <Display />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
