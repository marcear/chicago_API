//React
import React, { Component } from 'react';
//Material UI
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Card from 'material-ui/Card';
import CircularProgress from 'material-ui/CircularProgress';
//FlexBox Grid
import { Grid, Row, Col } from 'react-flexbox-grid';
//Models
import User from '../Models/User';
import UserService from '../Services/UserService';
//Validator
import { ValidatorForm } from 'react-form-validator-core';
import { TextValidator } from 'react-material-ui-form-validator';
//React router
import { Redirect } from 'react-router-dom';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                id: 1,
                name: "",
                password: ""
            },
            loading: false,
            isValid: false
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
        const { user } = this.state;
        if (user.name != '' && user.password != '') {
            this.setState({ loading: true });
            setTimeout(() => {
                UserService.getUser(user)
                    .done((response) => {
                        this.setState({ loading: false, isValid: true });
                        console.log(response);
                    })
                    .fail((error) => {
                        console.log(error)
                    });
            }, 1500);
        }
    }

    render() {
        //Una vez logeado el usuario, voy a la ruta del dashboard
        const { from } = { from: { pathname: '/' } }
        if (this.state.isValid) {
            return (
                <Redirect to={from} />)
        }

        //Muestro el loader dependiendo del state
        if (this.state.loading) {
            return (
                <Grid fluid>
                    <Row center="xs">
                        <div style={{ marginTop: 200 }}>
                            <CircularProgress size={50} thickness={5} />
                        </div>
                    </Row>
                </Grid>);
        }
        return (
            <ValidatorForm
                onSubmit={this.handleSubmit}
                ref="form" style={{ marginTop: 200 }}
                onError={errors => errors > 0 ? this.setState({ hasErrors: true }) : null}
            >
                <Grid fluid>
                    <Row center="xs">
                        <Col xs={3}>
                            <Card>
                                <Row center="xs">
                                    <TextValidator
                                        floatingLabelText="Usuario"
                                        hintText="Usuario"
                                        name="userName"
                                        onChange={this.handleUsernameChange}
                                        validators={['required']}
                                        value={this.state.user.name}
                                        errorMessages={['Este campo es requerido']}
                                        autoComplete="off" />
                                </Row>
                                <Row center="xs">
                                    <TextValidator
                                        floatingLabelText="Contraseña"
                                        hintText="Contraseña"
                                        name="password"
                                        type="password"
                                        onChange={this.handlePasswordChange}
                                        validators={['required']}
                                        value={this.state.user.password}
                                        errorMessages={['Este campo es requerido']}
                                        autoComplete="off" />
                                </Row>
                                <Row center="xs">
                                    <RaisedButton
                                        type="submit"
                                        label="Ingresar"
                                        primary={true}
                                        style={{ margin: 20, width: '80%' }} />
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Grid>
            </ValidatorForm>
        );
    }
}