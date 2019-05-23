import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Container, CssBaseline, Typography, TextField } from '@material-ui/core';
import { FormControlLabel, Checkbox, Button } from '@material-ui/core';
import { userActions } from '../../../actions/UserActions';
import './styles.scss';
import LogoImage from '../../../images/timers-logotype-new.png';
import LockIcon from '@material-ui/icons/lock';
import orange from '@material-ui/core/colors/orange';

class SignupPage extends Component {
    constructor(props) {
        super(props);

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

    componentWillReceiveProps(nextProps) {

        const { errors, registering } = nextProps.registration;
    
        let emailError = '';
        let passwordError = '';

        if (errors) {
            emailError = errors.email || '';
            passwordError = errors.password || '';
        }

        this.setState({ submitted: registering, emailError, passwordError });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { email, password } = this.state;
        const { dispatch } = this.props;
        dispatch(userActions.register(email, password));
    }

    render() {

        const { email, password, submitted, emailError, passwordError } = this.state

        return (
            <Container component="main">
                <CssBaseline />
                <div className="signup-form">
                    <header className="container">
                        <Link href="/">
                            <img src={LogoImage} />
                        </Link>
                        <Link href="/login" className="login-button">
                            Log in
                    </Link>
                    </header>
                    <main className="container">
                        <div>
                            <Typography component="h1" variant="h5" className="description welcomeText">
                                Get started with Timers</Typography>
                            <Typography component="p" variant="body2" className="description">
                                Create a free account to start tracking your worktime and increase your productivity.
                            </Typography>
                            <Typography component="p" variant="caption" color="textSecondary" className="no_credit_card">
                                No credit card required  • Unsubscribe at any time</Typography>
                        </div>

                        <form onSubmit={this.handleSubmit}>
                            <TextField
                                variant="outlined"
                                margin="none"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                className="form-elements"
                                value={email}
                                error={emailError.length > 0}
                                onChange={this.handleChange}
                                disabled={submitted}
                            />
                            {
                                emailError.length > 0 &&
                                <Typography component="p" variant="overline"
                                    className="error-text" style={{ color: orange[500] }}>
                                    {emailError}</Typography>
                            }
                            <TextField
                                variant="outlined"
                                margin="none"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                className="form-elements"
                                value={password}
                                error={passwordError.length > 0}
                                onChange={this.handleChange}
                                disabled={submitted}
                            />
                            {
                                passwordError.length > 0 &&
                                <Typography component="p" variant="overline"
                                    className="error-text" style={{ color: orange[500] }}>
                                    {passwordError}</Typography>
                            }
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                disabled={submitted}
                                className="form-elements">CREATE FREE ACCOUNT</Button>
                            <Typography component="p" variant="body1">or</Typography>
                            <Button
                                type="submit"
                                fullWidth
                                variant="outlined"
                                color="primary"
                                disabled={submitted}
                                className="form-elements">
                                Continue with Google
                            </Button>
                            <FormControlLabel
                                className="terms"
                                control={<Checkbox value="remember" color="primary" checked />}
                                label={<Typography component="p" variant="body2" color="textSecondary">
                                    I agree to the terms of use
                                </Typography>}
                            />
                        </form>

                    </main>
                    <footer className="container">
                        <Typography component="p" variant="caption" color="textSecondary">
                            <LockIcon fontSize="inherit" /> Your data is safe with us
                        </Typography>
                    </footer>
                </div>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    const { registration } = state;
    return {
        registration
    };
}

export default connect(mapStateToProps)(SignupPage);
//export default SignupPage