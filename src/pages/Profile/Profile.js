import React from 'react';
import { withRouter } from "react-router-dom";

import ProfileComponentSelector from './ProfileComponentSelector'
import { getProfile, updateProfile, getEditablePraxisForm, createPraxis, updatePraxis } from './../../utils/requests'

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileData: [],
      praxisId: null,
      professor_email: null,
      mentor_email: null,
      start_date: null,
      end_date: null
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

  handleChange({ target }) {
    let targetName = target.name;

    if (targetName == 'professor_email' || targetName == 'mentor_email' || targetName == 'start_date' || targetName == 'end_date') {
      this.setState({ [targetName]: target.value });
    } else {
      let profileData = this.state.profileData;
      profileData[target.name] = target.value;

      this.setState({
        profileData: profileData
      });
    }
  }

  onClickSave() {
    if (this.props.isPraxisView) {
      if (this.props.isNewPraxis) {
        createPraxis().then((res) => {
          updatePraxis({
            "id": res.body.id,
            "student_form": this.state.profileData,
            "professor_form": {
              "email": this.state.professor_email
            },
            "mentor_form": {
              "email": this.state.mentor_email
            },
            "start_date": this.state.start_date,
            "end_date": this.state.end_date
          })
            .then(() => {
              this.props.history.replace('/praxis-history')
            }).catch((ex) => {
              // TO DO
            })
        })
      }
      else {
        // let profileType = profileData.type?.replace('profile', '_form');

        // let praxisData = {
        //     id: praxisId,
        //     [profileType]: profileData
        // }
        updatePraxis({
          "id": this.state.praxisId,
          [this.state.profileData.type.replace('profile', '_form')]: this.state.profileData
        })
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
        professor_email={this.state.professor_email}
        mentor_email={this.state.mentor_email}
        start_date={this.state.start_date}
        end_date={this.state.end_date}
        handleChange={this.handleChange}
        onClickSave={this.onClickSave}
        isPraxisView={this.props.isPraxisView || false}
      />
    )
  }
}

export default withRouter(Profile);