//React
import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react';
//Material UI
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
//Componentes
import Login from '../Components/Login';
import Home from '../Components/Home';
//React router
//React router
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.isUserValid = false;
    }

    handleLogin(valid) {
        debugger;
        this.isUserValid = valid;
    }

    requireAuth(nextState, replace) {
        debugger;
        if (!this.isUserValid) {
            replace({
                pathname: '/login'
            })
        }
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/login' component={Login} />
                    <Route path='/' render={() => (this.isUserValid) ? (<Home />) : (<Login setLogged={this.handleLogin} />)} />
                </Switch>
            </Router>
        );
    }
}