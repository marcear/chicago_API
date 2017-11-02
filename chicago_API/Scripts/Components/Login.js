//React
import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react';
//Material UI
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Card from 'material-ui/Card';
//FlexBox Grid
import { Grid, Row, Col } from 'react-flexbox-grid';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }
    handleUsernameChange(e) {
        this.setState({ userName: e.target.value });
    }

    handlePasswordChange(e) {
        this.setState({ password: e.target.value });
    }

    handleSubmit(e) {
        if (this.state.userName == "pedro") {
            console.log("ok")
        } else {
            console.log("mal")
        }
        e.preventDefault();
    }

    render() {
        return (
            <Grid fluid>
                <Row center="xs">
                    <Col xs={3}>
                        <Card>
                            <form onSubmit={this.handleSubmit} style={{ marginTop: 200 }}>
                                <Row center="xs">
                                    <TextField
                                        hintText="Usuario"
                                        onChange={this.handleUsernameChange}
                                    />
                                </Row>
                                <Row center="xs">
                                    <TextField
                                        hintText="Contraseña"
                                        type="password"
                                        onChange={this.handlePasswordChange}
                                    />
                                </Row>
                                <Row center="xs">
                                    <RaisedButton
                                        type="submit"
                                        label="Ingresar"
                                        onClick={this.handleSubmit} />
                                </Row>
                            </form>
                        </Card>
                    </Col>
                </Row>
            </Grid>
        );
    }
}