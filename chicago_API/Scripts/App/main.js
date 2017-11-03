//React
import React from 'react';
import ReactDOM from 'react-dom';
//App
import App from './App';
//Theme
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const MainApp = () => (
        <MuiThemeProvider>
            <App />
        </MuiThemeProvider>
);

ReactDOM.render(
    <MainApp />,
    document.getElementById('main')
);

