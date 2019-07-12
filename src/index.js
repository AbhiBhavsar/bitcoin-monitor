import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import rxStore from './store/store';
import App from "./components/App";

ReactDOM.render(<Provider store={rxStore}>
                    <App />
                </Provider>,
                document.getElementById("root"));
