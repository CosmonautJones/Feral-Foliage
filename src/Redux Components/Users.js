import React from 'react';
import { connect } from 'react-redux';

const Users = (props) => {
    const users = props.users.map(user, i)
    return (
        <ul>
            { users }
        </ul>
    );
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    };
};

export defaul connect (mapStateToProps)(Users);