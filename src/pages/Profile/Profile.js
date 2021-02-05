import React from 'react';

import ProfileComponentSelector from './ProfileComponentSelector'
import { getProfile, updateProfile, getEditablePraxisForm } from './../../utils/requests'

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileData: [],
      praxisId: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  componentDidMount() {
    // TO DO FOR PRAXIS EDIT
    this.props.isPraxisView ? (
      this.setState({profileData: this.props.praxisData, praxisId: this.props.praxisId})
      // getEditablePraxisForm(profileData.id)
      //   .then((res) => {
      //     this.setState({ profileData: res.body });
      //   }).catch((ex) => {
      //     // TO DO
      //   })
    ) : (
        getProfile()
          .then((res) => {
            this.setState({ profileData: res.body });
          }).catch((ex) => {
            // TO DO
          })
      )
  }

  handleChange({ target }) {
    // TO DO FOR PRAXIS EDIT 
    // NOT ANYMORE
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