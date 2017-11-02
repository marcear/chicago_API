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
//Models
import User from '../Models/User';
import UserService from '../Services/UserService';
//Validator
import { ValidatorForm } from 'react-form-validator-core';
import { TextValidator } from 'react-material-ui-form-validator';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                id: 1,
                name: "",
                password: ""
            },
            hasErrors: false

        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }
    handleUsernameChange(e) {
        let user = Object.assign(User.getDefaultUser(), this.state.user, { name: e.target.value });
        this.setState({ user });
    }

    handlePasswordChange(e) {
        let user = Object.assign(User.getDefaultUser(), this.state.user, { password: e.target.value });
        this.setState({ user });
    }

    handleSubmit(e) {
        const { user, hasErrors } = this.state;
        debugger;
        if (user.name != '' && user.password != '') {
            UserService.getUser(user)
                .done((response) => {
                    console.log(response);
                })
                .fail((error) => {
                    console.log(error)
                });
        }
    }

    render() {
        return (
            <ValidatorForm onSubmit={this.handleSubmit} ref="form" style={{ marginTop: 200 }} onError={errors => errors > 0 ? this.setState({ hasErrors: true }) : null}>
                <Grid fluid>
                    <Row center="xs">
                        <Col xs={3}>
                            <Card>
                                <Row center="xs">
                                    <TextValidator
                                        floatingLabelText="Usuario"
                                        hintText="Usuario"
                                        name="usuario"
                                        onChange={this.handleUsernameChange}
                                        validators={['required']}
                                        value={this.state.user.name}
                                        errorMessages={['Este campo es requerido']} />
                                </Row>
                                <Row center="xs">
                                    <TextValidator
                                        floatingLabelText="Contraseña"
                                        hintText="Contraseña"
                                        name="contraseña"
                                        type="password"
                                        onChange={this.handlePasswordChange}
                                        validators={['required']}
                                        value={this.state.user.password}
                                        errorMessages={['Este campo es requerido']} />
                                </Row>
                                <Row center="xs">
                                    <RaisedButton
                                        type="submit"
                                        label="Ingresar"
                                        onClick={this.handleSubmit}
                                        primary={true}
                                        style={{ margin: 20 }} />
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Grid>
            </ValidatorForm>
        );
    }
}