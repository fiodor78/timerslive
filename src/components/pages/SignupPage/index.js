import React, { Component } from 'react';
import { Link, Container, CssBaseline, Typography, TextField } from '@material-ui/core';
import { FormControlLabel, Checkbox, Button } from '@material-ui/core';

import './styles.scss';
import LogoImage from '../../../images/timers-logotype-new.png';
import LockIcon from '@material-ui/icons/lock';

class SignupPage extends Component {
    state = {}
    render() {
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

                        <form>
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
                            />
                            <TextField
                                variant="outlined"
                                margin="none"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                className="form-elements"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                //size="large"
                                className="form-elements">
                                CREATE FREE ACCOUNT
                            </Button>
                            <Typography component="p" variant="body1">or</Typography>
                            <Button
                                type="submit"
                                fullWidth
                                variant="outlined"
                                color="primary"
                                //size="large"
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

export default SignupPage;