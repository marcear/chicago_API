//React
import React, { Component } from 'react';
//Material UI
import { List, ListItem } from 'material-ui/List';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Home from 'material-ui/svg-icons/action/home';
import Event from 'material-ui/svg-icons/action/event';
import { cyan800 } from 'material-ui/styles/colors';

import { Link, Route } from 'react-router-dom';

const style = {
    homeColor: cyan800
}

export default class SideBarItemMenu extends Component {
    constructor(props) {
        super(props);
        this.getMenuItems = this.getMenuItems.bind(this);
        this.setRoutes = this.setRoutes.bind(this);
        this.items = [];
    }

    componentWillMount() {
        this.setRoutes();
        this.getMenuItems();
    }

    getIcon(name) {
        switch (name) {
            case "Home":
                return <Home color={style.homeColor} />
                break;
            case "Eventos":
                return <Event color={style.homeColor} />
                break;
            default:
                return null;
        }
    }

    setRoutes() {
        const { routes } = this.props;
        let test = routes.map((route, index) => (
            <Route
                key={index}
                path={route.path}
                render={() => route.sidebar}
                exact={route.exact}
            />
        ));
        debugger;
        return <div>{test}</div>
    }

    getMenuItems() {
        const { routes } = this.props;
        return routes.map((item, i) => {
            this.items.push(
                <MenuItem key={i}
                    primaryText={item.name}
                    leftIcon={this.getIcon(item.name)}
                    value={item}
                    containerElement={<Link to={item.path} />} />)
        });
    }

    render() {
        return (
            <Menu>{this.items}</Menu>
        );
    }
}