//React
import React from 'react';
import ReactDOM from 'react-dom';
//App
import App from './App';
//Theme
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//React Router
import { BrowserRouter as Router } from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';

const MainApp = () => (
    <Router>
        <div>
            <MuiThemeProvider>
                <Grid fluid>
                    <App />
                </Grid>
            </MuiThemeProvider>
        </div>
    </Router>
);

ReactDOM.render(
    <MainApp />,
    document.getElementById('main')
);

