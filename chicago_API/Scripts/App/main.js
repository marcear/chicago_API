//React
import React from 'react';
import ReactDOM from 'react-dom';

//App
import App from './App';
//Theme
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//React Router
import { BrowserRouter as Router } from 'react-router-dom';
import SideBar from '../Components/SideBar';

const MainApp = () => (
    <Router>
        <MuiThemeProvider>
            <div>
                <SideBar />
                <App />
            </div>
        </MuiThemeProvider>
    </Router>
);

ReactDOM.render(
    <MainApp />,
    document.getElementById('main')
);

