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
    //<Provider store={store}>
        <App />
    //</Provider>
)

//const Root = () => (
// <ThemeProvider theme={theme}>
//     {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
//     <CssBaseline />
//     <Router>
//         <Switch>
//         <Route
//             exact
//             path="/"
//             render={() => {
//                 return (
//                   <Redirect to="/login" /> 
//                 )
//             }}
//           />
//         <Route exact path="/login" 
//         render={(props = useStyles()) => (<Login {...props}/>)}
//         //component={Login}
//         />
//         <Route exact path="/register" component={Register}/>
//         </Switch>
//     </Router>
// </ThemeProvider>
//)

ReactDOM.render(<Root />, document.getElementById('root'));