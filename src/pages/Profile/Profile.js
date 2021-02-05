import React from 'react';

import ProfileComponentSelector from './ProfileComponentSelector'
import { getProfile, updateProfile, getEditablePraxisForm, createPraxis, updatePraxis } from './../../utils/requests'

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
      this.props.isNewPraxis ? (
        createPraxis()
          .then((res) => {
            //this.setState({ profileData: res.body, praxisId: res.body.id })
            getEditablePraxisForm(res.body.id)
              .then((res) => {
                this.setState({ profileData: res.body, praxisId: res.body.id });
              }).catch((ex) => {
                // TO DO
              })
          })
      ) : (
          getEditablePraxisForm(this.props.praxisId)
            .then((res) => {
              this.setState({ profileData: res.body, praxisId: res.body.id });
            }).catch((ex) => {
              // TO DO
            })
        )
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
    let profileData = this.state.profileData;
    profileData[target.name] = target.value;

    this.setState({
      profileData: profileData
    });
  }

  onClickSave() {
    this.props.isPraxisView ? (
      updatePraxis(this.state.praxisId, this.state.profileData)
        .then((res) => {
          this.setState({ profileData: res.body });
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