import React from 'react';

import Profile from './../../pages/Profile/Profile'
import LoginForm from '../../components/Forms/Login/LoginForm'
import { login } from './../../utils/requests'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      rememberMe: false,
      isLoggedIn: false
    };

    this.signIn = this.signIn.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value
    });
  }

  signIn() {
    login(this.state.email, this.state.password)
      .then((res) => {
        this.setState({ isLoggedIn: !this.state.isLoggedIn });
      })
      .catch((ex) => {
        // TO DO
      });
  }

  render() {
    return (
      this.state.isLoggedIn ? (
        // TO DO hisotry push /profile
        <Profile {...this.props} email={this.state.email} />
      ) : (
          <LoginForm
            {...this.props}
            loginInfo={this.state}
            signIn={this.signIn}
            handleChange={this.handleChange}
          />
        )
    )
  }
}

export default Login;