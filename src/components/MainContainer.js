import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Router, Switch, Route} from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage'
import { PrivateRouter } from './router/PrivateRouter';
import { history } from '../helpers/History';

import orange from '@material-ui/core/colors/orange';
import amber from '@material-ui/core/colors/amber';


const theme = createMuiTheme({
    palette: {
        type: 'dark',
        // background: {
        //     paper: grey,
        //     default: black
        // },
        primary: { main: amber[500] },
        error: {main: orange[500] }
        // secondary: grey,
        // error: red,
        // // Used by `getContrastText()` to maximize the contrast between the background and
        // // the text.
        // contrastThreshold: 3,
        // // Used to shift a color's luminance by approximately
        // // two indexes within its tonal palette.
        // // E.g., shift from Red 500 to Red 300 or Red 700.
        // tonalOffset: 0.2,
    },
});

class MainContainer extends Component {


    state = {}
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <Router history={history}>
                    <Switch>
                        <PrivateRouter exact path="/" component={HomePage} />
                        <Route path="/login" component={LoginPage}/>
                        <Route path="/signup" component={SignupPage}/>
                        {//<Route path="*" component={WelcomePage}/>
                        }
                    </Switch>
                </Router>

            </MuiThemeProvider>
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

export default connect(mapStateToProps)(MainContainer);