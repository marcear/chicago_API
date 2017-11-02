//React
import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react';
//Material UI
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);

    }
    handleUsernameChange(e) {
        console.log(e);
        this.setState({ userName: e.target.value });
    }

    handleSubmit() {
        this.props.handleLogin();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <TextField
                    hintText="Usuario"
                    onChange={this.handleUsernameChange}
                /><br />
                <TextField
                    hintText="Contraseña"
                    type="password"
                /><br />
                <RaisedButton
                    type="submit"
                    label="Ingresar"
                    onClick={this.handleSubmit} />
            </form>
        );
    }
}