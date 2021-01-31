import React from 'react';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import store from './redux/store'
import { useStyles } from './utils/constants'

import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Page from './components/Page/Page'

import Profile from './pages/Profile/Profile'

class App extends React.Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Provider store={store}>
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
                            <Route exact path="/login" component={() => <Login styles={useStyles()} />} />
                            <Route exact path="/register" component={() => <Register styles={useStyles()} />} />
                            <Route exact path="/new-praxis" component={() => <Page styles={useStyles()} />} />
                            <Route exact path="/profile" component={() => <Profile styles={useStyles()} />} />
                            <Route exact path="/praxis-history" component={() => <Page styles={useStyles()} />} />
                        </Switch>
                    </Router>
                </Provider>
            </ThemeProvider>
        )
    }
}

export default App