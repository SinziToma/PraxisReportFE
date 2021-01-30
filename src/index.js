import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import { Provider } from 'react-redux';
import { store } from './redux/store'
import App from './App'

const Root = () => (
    <App />
)


ReactDOM.render(<Root />, document.getElementById('root'));