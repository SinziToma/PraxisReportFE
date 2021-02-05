import React from 'react';
import { withRouter } from "react-router-dom";

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
    this.props.isPraxisView && !this.props.isNewPraxis ? (
      getEditablePraxisForm(this.props.location.state.praxisId)
        .then((res) => {
          this.setState({ profileData: res.body, praxisId: this.props.location.state.praxisId });
        }).catch((ex) => {
          // TO DO
        })
    ) : (
        getProfile()
          .then((res) => {
            this.setState({ profileData: res.body });
          }).catch((ex) => {
            // TO DO
          })
      )
  }

  // componentDidMount() {
  //   if (this.props.isPraxisView) {
  //     if (this.props.isNewPraxis) {
  //       createPraxis()
  //         .then((res) => {
  //           let praxisId = res.body.id;
  //           getEditablePraxisForm(praxisId)
  //             .then((res) => {
  //               this.setState({ profileData: res.body, praxisId: praxisId });
  //             }).catch((ex) => {
  //               // TO DO
  //             })
  //         })
  //     } else {

  //       getEditablePraxisForm(this.props.location.state.praxisId)
  //         .then((res) => {

  //           this.setState({ profileData: res.body, praxisId: this.props.location.state.praxisId });
  //         })
  //         .catch((ex) => {
  //           // TO DO
  //         })
  //     }
  //   } else {
  //     getProfile()
  //       .then((res) => {
  //         this.setState({ profileData: res.body });
  //       }).catch((ex) => {
  //         // TO DO
  //       })
  //   }
  // }



  handleChange({ target }) {
    let profileData = this.state.profileData;
    profileData[target.name] = target.value;

    this.setState({
      profileData: profileData
    });
  }

  onClickSave() {
    if (this.props.isPraxisView) {
      if (this.props.isNewPraxis) {
        createPraxis().then((res) => {
          updatePraxis(res.body.id, this.state.profileData)
            .then(() => {
              this.props.history.replace('/praxis-history')
            }).catch((ex) => {
              // TO DO
            })
        })
      }
      else {
        updatePraxis(this.state.praxisId, this.state.profileData)
          .then(() => {
            this.props.history.replace('/praxis-history')
          }).catch((ex) => {
            // TO DO
          })
      }
    } else {
      updateProfile(this.state.profileData)
        .then((res) => {
          this.setState({ profileData: res.body });
        }).catch((ex) => {
          // TO DO
        })
    }
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

export default withRouter(Profile);