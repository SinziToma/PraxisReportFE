import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import theme from './theme';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <Router>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={() => {
                                return (
                                    <Redirect to="/login" />
                                )
                            }}
                        />
                        <Route
                            exact
                            path="/logout"
                            render={() => {
                                return (
                                    <Redirect to="/login" />
                                )
                            }}
                        />
                        <Route exact path="/login" component={() => < Login styles={useStyles()} />} />
                        <Route exact path="/register" component={() => < Register styles={useStyles()} />} />
                    </Switch>
                </Router>
            </ThemeProvider>
        )
    }
}

// <ThemeProvider theme={theme}>
//         {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
//         <CssBaseline />
//         <Router>
//             <Switch>
//             <Route
//                 exact
//                 path="/"
//                 render={() => {
//                     return (
//                       <Redirect to="/login" /> 
//                     )
//                 }}
//               />
//             <Route exact path="/login" component={Login}/>
//             <Route exact path="/register" component={Register}/>
//             </Switch>
//         </Router>
//     </ThemeProvider>

export default App
