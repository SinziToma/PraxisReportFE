import React from 'react';

import Profile from './../../pages/Profile/Profile'
import RegisterForm from './../../components/Forms/Register/RegisterForm'
import { register } from './../../utils/requests'


class Register extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      type: '',
      isRegistered: false
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
    register(this.state.name, this.state.email, this.state.password, this.state.type)
      .then((res) => {
        // TO DO redirect to login if register succesfull
        this.setState({ isRegistered: !this.state.isRegistered });
      })
      .catch((ex) => {
        // TO DO
        var a = 1;
      });
  }

  render() {
    return (
      this.state.isRegistered ? (
        // TO DO hisotry push /profile
        <Profile {...this.props} />
      ) : (
          <RegisterForm
            {...this.props}
            registerInfo={this.state}
            register={this.register}
            handleChange={this.handleChange}
          />
        )
    );
  }
}

export default Register