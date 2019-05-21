import React, { Component } from 'react';
import LoginForm from './LoginForm';
import LoginNotificationOffer from './LoginNotificationOffer';
import "./styles.scss";

class LoginPage extends Component {
    state = {  }
    render() {
        return (
            <div className="login-page_wrapper">
                <LoginForm/>
                <LoginNotificationOffer/>
            </div>
        );
    }
}

export default LoginPage;