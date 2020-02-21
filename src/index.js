import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { AppContext } from "./context";

ReactDOM.render(
    <AppContext> {/* store data values */}
        <App />
    </AppContext>
    , document.getElementById('root'));
