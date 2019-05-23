import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Link, TextField, Checkbox, Typography } from '@material-ui/core';
import { FormControlLabel, CssBaseline } from '@material-ui/core';
import { userActions } from '../../../actions/UserActions';
import LogoImage from '../../../images/timers-logotype-new.png';
import LockIcon from '@material-ui/icons/lock';
import orange from '@material-ui/core/colors/orange';

class LoginForm extends Component {

    constructor(props) {
        super(props);

        // reset login status
        this.props.dispatch(userActions.logout());

        this.state = {
            email: '',
            emailError: false,
            password: '',
            passwordError: false,
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {

        const { loggingIn, errors, password } = nextProps.authentication;
        let emailError = '';
        let passwordError = '';

        if (errors) {
            emailError = errors.username || '';
            passwordError = errors.password || '';
        }

        console.log("PASSWORD: ", password, "isLogged", loggingIn);

        this.setState({ submitted: loggingIn, password: password, emailError, passwordError });
    }

    handleChange(e) {

        const { name, value } = e.target;
        let { emailError, passwordError } = this.state;

        switch (name) {
            case 'email':
                emailError = '';
                break;
            case 'password':
                passwordError = '';
                break;
        }

        this.setState({ emailError, passwordError, [name]: value });

    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { email, password } = this.state;
        const { dispatch } = this.props;
        dispatch(userActions.login(email, password));
    }

    componentDidMount() {
        //console.log('CDM');
    }

    render() {

        const { email, password, submitted, emailError, passwordError } = this.state;
        return (
            <div className="login-form">
                <CssBaseline />
                <div className="content">

                    <header>
                        <Link href="/">
                            <img src={LogoImage} />
                        </Link>
                        <div className="login-button">Don&apos;t have an account?&nbsp;
                        <Link href="/signup" className="login-button">Sign up</Link>
                        </div>
                    </header>

                    <form noValidate className="container" onSubmit={this.handleSubmit}>
                    <div className="h1 container"><Typography component="h2" variant="h5">Log in</Typography></div>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={email}
                            error={emailError.length > 0}
                            onChange={this.handleChange}
                            disabled={submitted}
                        />
                        {
                            emailError.length > 0 &&
                            <Typography component="p" variant="overline" className="error-text" style={{ color: orange[500] }}>
                                {emailError}</Typography>
                        }
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            value={password}
                            error={passwordError.length > 0}
                            autoComplete="current-password"
                            onChange={this.handleChange}
                            disabled={submitted}
                        />
                        {
                            passwordError.length > 0 &&
                            <Typography component="p" variant="overline" className="error-text" style={{ color: orange[500] }}>
                                {passwordError}</Typography>
                        }
                        <div className="extra-actions">
                            <FormControlLabel
                                control={<Checkbox value="remember" checked color="primary" />}
                                label="Remember me" />
                            <Link href="#" variant="body2" style={{color: "white"}}>Forgot password?</Link>
                        </div>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            size="large"
                            className="button"
                            disabled={submitted}
                        >{submitted ? "Signing In..." : "Sign In" }
                        </Button>
                        <Button
                            fullWidth
                            variant="outlined"
                            color="primary"
                            size="large"
                            className="button">
                            Continue with Google
                            </Button>
                    </form>
                    <footer className="container">
                        <Typography component="p" variant="caption" color="textSecondary">
                            <LockIcon fontSize="inherit" /> Your data is safe with us
                        </Typography>
                    </footer>
                </div>
            </div>
        );
    }

}

function mapStateToProps(state) {
    const { authentication } = state;
    return {
        authentication
    };
}

export default connect(mapStateToProps)(LoginForm);