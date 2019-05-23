import React, { Component } from 'react';
import { connect } from 'react-redux';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
//import WelcomePage from './pages/WelcomePage';
import HomePage from './pages/HomePage'

import { PrivateRouter } from './router/PrivateRouter';

//import purple from '@material-ui/core/colors/purple';
import amber from '@material-ui/core/colors/amber';

// import red from '@material-ui/core/colors/red';
// import {grey, black} from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        // background: {
        //     paper: grey,
        //     default: black
        // },
        primary: { main: amber[500] },
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
                <BrowserRouter>
                    <Switch>
                        <PrivateRouter exact path="/" component={HomePage} />
                        <Route path="/login" component={LoginPage}/>
                        <Route path="/signup" component={SignupPage}/>
                        {//<Route path="*" component={WelcomePage}/>
                        }
                    </Switch>
                </BrowserRouter>

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