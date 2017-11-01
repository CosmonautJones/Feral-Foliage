import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addUser } from '../Redux Actions';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newUser: '',
            newPassword: ''
        };
        this.addUser = this.addUser.bind(this);
        this.updateNewUser = this.updateNewUser.bind(this);
        this.addPassword = this.addPassword.bind(this);
        this.updateNewPassword = this.updatePassword.bind(this);
        
    }

    addUser(event) {
        event.preventDefault();
        this.props.addUser({
            value: this.state.newUser
        });
        this.setState({
            newUser: ''
        });
    }

    addPassword(event) {
        event.preventDefault();
        this.props.addPassword({
            value: this.state.newPassword
        });
        this.setState({
            newPassword: ''
        });
    }

    updateNewUser(event) {
        this.setState({
            newUser: event.target.value,
        });
    }

    updateNewPassword(event) {
        this.setState({
            newUser: event.target.value,
        });
    }

    render() {
        return (
            <div className="UserForm">
                <form onSubmit={this.addUser}>
                  <input
                    onChange={this.updateNewUser}
                    placeholder="New User"
                    value={this.state.newUser}
                    />
                </form>
                <form onSubmit={this.addPassword}>
                  <input
                    onChange={this.updatePassword}
                    placeholder="New Password"
                    value={this.state.newPassword}
                    />
                </form>
            </div>
        );
    }
}

export default connect(null, { addUser })(AddUser)