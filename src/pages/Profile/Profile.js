import React from 'react';

import ProfileComponentSelector from './ProfileComponentSelector'
import { getProfile, updateProfile } from './../../utils/requests'

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileData: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  componentDidMount() {
    // TO DO FOR PRAXIS EDIT
    getProfile()
      .then((res) => {
        this.setState({ profileData: res.body });
      }).catch((ex) => {
        // TO DO
      });
  }

  handleChange({ target }) {
    // TO DO FOR PRAXIS EDIT
    let profileData = this.state.profileData;
    profileData[target.name] = target.value;

    this.setState({
      profileData: profileData
    });
  }

  onClickSave() {
    this.props.isPraxisView ? (
      // TO DO
      updatePraxis(his.state.data)
        .then((res) => {
          this.setState({ praxisData: res.body });
        }).catch((ex) => {
          // TO DO
        })
    ) : (
        updateProfile(this.state.profileData)
          .then((res) => {
            this.setState({ profileData: res.body });
          }).catch((ex) => {
            // TO DO
          })
      )
  }

  render() {
    return (
      <ProfileComponentSelector
        {...this.props}
        profileData={this.state.profileData}
        handleChange={this.handleChange}
        onClickSave={this.onClickSave}
        isPraxisView={this.props.isPraxisView || false}
      />
    )
  }
}

export default Profile;