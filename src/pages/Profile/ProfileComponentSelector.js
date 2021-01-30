import React from 'react';

import Page from '../../components/Page/Page'
import MentorForm from '../../components/Forms/Profile/MentorForm'
import ProfessorForm from '../../components/Forms/Profile/ProfessorForm'
import StudentForm from '../../components/Forms/Profile/StudentForm'

class ProfileComponentSelector extends React.Component {
  constructor(props) {
    super(props);
  }

  getComponent(){
    if(this.props.profileData) {
      switch(this.props.profileData.type){
      case 'mentorprofile': 
        return <MentorForm {...this.props}/>;
      case 'studentprofile': 
        return <StudentForm {...this.props}/>;
      default: 
        return <ProfessorForm {...this.props}/>
      }
    }
  }

  render() {
    let profileForm;
    profileForm = this.getComponent(this.props.profileData);

    return (
      <div>
        <Page {...this.props}/>
          {profileForm}
      </div>
    )
  }
}

export default ProfileComponentSelector