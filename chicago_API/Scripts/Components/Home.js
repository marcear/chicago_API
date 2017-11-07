//React
import React, { Component } from 'react';
//Material UI
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle,FlatButton } from 'material-ui'; 
//Componentes
import SideBar from '../Components/SideBar';
//FlexBox Grid
import { Grid, Row, Col } from 'react-flexbox-grid';
import  AddImage from 'material-ui/svg-icons/image/add-a-photo';

const styles = {
    uploadButton: {
        verticalAlign: 'middle'
    },
    uploadInput: {
        cursor: 'pointer',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        width: '100%',
        opacity: 0
    },
};

export default class Home extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Grid fluid>
                <Row center="xs">
                    <FlatButton
                        icon={<AddImage />}
                      
                    />
                    <input type="file" style={styles.uploadInput} />
                </Row>
            </Grid>

        );
    }
}