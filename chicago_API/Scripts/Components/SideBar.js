//React
import React, { Component } from 'react';
//Material UI
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Menu from 'material-ui/svg-icons/navigation/menu';
import IconButton from 'material-ui/IconButton';
import ListItemMenu from '../Components/ListItemMenu';

export default class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle() {
        this.setState({ open: !this.state.open });
    }

    render() {
        const items = [{ name: "Home"}, { name: "Eventos" }]
        return (
            <div>
                <IconButton
                    onClick={this.handleToggle}
                >
                    <Menu />
                </IconButton>

                <Drawer open={this.state.open} openSecondary={true}>
                    <ListItemMenu items={items} />
                </Drawer>
            </div>
        );
    }
}