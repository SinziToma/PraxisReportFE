import React from 'react';
import { connect } from 'react-redux';

import ProfileComponentSelector from './ProfileComponentSelector'
import { getProfile, updateProfile } from './../../utils/requests'

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileData: [],
      userEmail: props.email
    };

    this.handleChange = this.handleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  componentDidMount() {
    getProfile(this.props.userEmail)
      .then((res) => {
        this.setState({ profileData: res.body, userEmail: this.props.userEmail });
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

const mapStateToProps = (state) => {
  return {
    userEmail: state.email
  }
}

export default connect(mapStateToProps)(Profile);