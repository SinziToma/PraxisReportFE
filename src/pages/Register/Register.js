import React from 'react';
import { withRouter } from "react-router-dom";

import RegisterForm from './../../components/Forms/Register/RegisterForm'
import { register } from './../../utils/requests'


class Register extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      type: ''
    };

    this.register = this.register.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSelectChange(value) {
    switch (value) {
      case 1:
        return 'mentorprofile'
      case 2:
        return 'professorprofile'
      case 3:
        return 'studentprofile'

    }
  }

  handleChange({ target }) {
    let value = target.value;

    if (target.name == 'type') {
      value = this.handleSelectChange(value);
    }

    this.setState({
      [target.name]: value
    });
  }

  register() {

    console.log(this.state);

    register(this.state.name, this.state.email, this.state.password, this.state.type)
      .then((res) => {
        this.props.history.replace('/login');
      })
      .catch((ex) => {
        // TO DO
      });
  }

  render() {
    return (
      <RegisterForm
        {...this.props}
        registerInfo={this.state}
        register={this.register}
        handleChange={this.handleChange}
      />
    );
  }
}

export default withRouter(Register)
