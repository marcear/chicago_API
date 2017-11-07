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
        this.handleItemClick = this.handleItemClick.bind(this);
        this.setRoutes = this.setRoutes.bind(this);
        this.items = [];
    }

    componentWillMount() {
        this.getMenuItems();
        this.setRoutes();
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

    handleItemClick(item) {
        this.props.handleItemClick(item);
    }

    setRoutes() {
        const { routes } = this.props;
        routes.map((route, index) => (
            <Route
                key={index}
                path={route.route}
                component={route.sidebar}
            />
        ));
    }

    getMenuItems() {
        const { routes } = this.props;
        return routes.map((item, i) => {
            this.items.push(
                <MenuItem key={i}
                    primaryText={item.name}
                    leftIcon={this.getIcon(item.name)}
                    value={item}
                    containerElement={<Link to={item.route} />} />)
        });
    }

    render() {
        return (
            <Menu>{this.items}</Menu>
        );
    }
}