import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Avatar, Button, Link, Grid, Box, TextField, Checkbox, Typography } from '@material-ui/core';
import { Container, FormControlLabel, CssBaseline } from '@material-ui/core';
import { userActions } from '../../../actions/UserActions';
import Alarm from '@material-ui/icons/Alarm';

function MadeByTimersLive() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Built with happiness by the '}
            <Link color="inherit" href="https://timers.live/">TIMERS.LIVE</Link>
            {' team.'}
        </Typography>
    );
}

class LoginForm extends Component {

    constructor(props) {
        super(props);

        // reset login status
        this.props.dispatch(userActions.logout());

        this.state = {
            email: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        console.log( name, value);
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { email, password } = this.state;
        const { dispatch } = this.props;

        if (email && password) {
            dispatch(userActions.login(email, password));
        }
    }

    componentDidMount() {
        console.log('CDM');
    }

    render() {

        const {email, submitted} = this.state;
        const {alert} = this.props;

        console.log("Rendering");

        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                {alert.message && <h4>{alert.message}</h4>}
                <div className="login-form">
                    <Avatar className="avatar">
                        <Alarm />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in to Timers
                    </Typography>
                    <form noValidate onSubmit={this.handleSubmit}>
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
                            value = {email}
                            onChange={this.handleChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={this.handleChange}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className="submit"
                            disabled={submitted}
                        >
                            Sign In
                    </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                            </Link>
                            </Grid>
                            <Grid item>
                                <Link href="/signup" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <Box mt={5}>
                    <MadeByTimersLive />
                </Box>
            </Container>
        );
    }

}

/* const useStyles = makeStyles(theme => ({
    
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        //backgroundColor: theme.palette.common.white,
        padding: '24px',
    },
    avatar: {
        margin: theme.spacing(1),
        //backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
})); */

function mapStateToProps(state) {
    const { authentication, alert } = state;
    return {
        authentication,
        alert
    };
}

export default connect(mapStateToProps)(LoginForm);
//export default { connectedLoginPage  };