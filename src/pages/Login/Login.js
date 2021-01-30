import React from 'react';
import { withRouter } from "react-router-dom";

import LoginForm from '../../components/Forms/Login/LoginForm'
import { login } from './../../utils/requests'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      rememberMe: false
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
        this.props.history.replace('/profile');
      })
      .catch((ex) => {
        // TO DO
      });
  }

  render() {
    return (
      <LoginForm
        {...this.props}
        loginInfo={this.state}
        signIn={this.signIn}
        handleChange={this.handleChange}
      />
    )
  }
}

export default withRouter(Login);