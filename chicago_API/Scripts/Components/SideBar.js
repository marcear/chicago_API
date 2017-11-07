//React
import React, { Component } from 'react';
//Material UI
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Menu from 'material-ui/svg-icons/navigation/menu';
import IconButton from 'material-ui/IconButton';
import SideBarItemMenu from '../Components/SideBarItemMenu';
//React Router
import { Redirect } from 'react-router-dom';
import Home from '../Components/Home';
import Events from '../Components/Events';

export default class SideBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            redirectTo: null,
            isRedirecting: false
        }
    }

    render() {
        const routes = [{ name: "Home", path: "/", sidebar: Home, exact: true }, { name: "Eventos", path: "/events", sidebar: () => Events }]
        return (
            <div>
                <Menu />
                <Drawer open={this.state.open} docked={true} open={true}>
                    <AppBar title="Chicago" showMenuIconButton={false} />
                    <SideBarItemMenu routes={routes} />
                </Drawer>
            </div>
        );
    }
}