import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const MainApp = () => (
    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>
);

ReactDOM.render(
    <MainApp/>,
    document.getElementById('main')
);

