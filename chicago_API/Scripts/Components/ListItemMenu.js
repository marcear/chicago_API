//React
import React, { Component } from 'react';
//Material UI
import { List, ListItem } from 'material-ui/List';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Home from 'material-ui/svg-icons/action/home';
import Event from 'material-ui/svg-icons/action/event';
import Otro from 'material-ui/svg-icons/navigation/check';
import { cyan800 } from 'material-ui/styles/colors';

const style = {
    homeColor: cyan800
}

export default class ListItemMenu extends Component {
    constructor(props) {
        super(props);
        this.getMenuItems = this.getMenuItems.bind(this);
        this.items = [];
    }

    componentWillMount() {
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
                return <Otro />
        }
    }

    getMenuItems() {
        console.log("getmenuitems");
        console.log(items)
        const { items } = this.props;
        console.log(items)
        return items.map((item, i) => {
            this.items.push(<MenuItem key={i} primaryText={item.name} leftIcon={this.getIcon(item.name)} value={item} />)
        })
    }

    render() {
        return (
            <Menu>{this.items}</Menu>
        );
    }
}