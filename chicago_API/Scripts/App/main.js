//React
import React from 'react';
import ReactDOM from 'react-dom';
//App
import App from './App';
//Theme
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//React Router
import {BrowserRouter as Router} from 'react-router-dom';

const MainApp = () => (
    <Router>
        <MuiThemeProvider>
            <App />
        </MuiThemeProvider>
    </Router>
);

ReactDOM.render(
    <MainApp />,
    document.getElementById('main')
);

