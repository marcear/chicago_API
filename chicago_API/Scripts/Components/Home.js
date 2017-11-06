import React, { Component } from 'react';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';

//Componentes
import SideBar from '../Components/SideBar';

export default class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.comp}<SideBar />
            </div>
            //Agregar estos componentes
            //SideBar
            //ToolBar
            //Footer
        );
    }
}