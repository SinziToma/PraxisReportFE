import React from 'react';

import ProfileComponentSelector from './ProfileComponentSelector'
import { getProfile, updateProfile } from './../../utils/requests'

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileData: [],
      user: {
        email: props.email || 'diftinca@yahoo.com'
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  componentDidMount() {
    getProfile(this.state.user.email)
      .then((res) => {
        this.setState({ profileData: res.body });
      }).catch((ex) => {
        // TO DO
      });
  }

  handleChange({ target }) {
    let profileData = this.state.profileData;
    profileData[target.name] = target.value;

    this.setState({
      profileData: profileData
    });
  }

  onClickSave() {
    updateProfile(this.state.profileData)
      .then((res) => {
        this.setState({ profileData: res.body });
      }).catch((ex) => {
        // TO DO
      });
  }

  render() {
    return (
      <ProfileComponentSelector
        {...this.props}
        profileData={this.state.profileData}
        handleChange={this.handleChange}
        onClickSave={this.onClickSave}
      />
    )
  }
}

export default Profile