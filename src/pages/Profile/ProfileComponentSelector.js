import React from 'react';

import Page from '../../components/Page/Page'
import MentorForm from '../../components/Forms/Profile/MentorForm'
import ProfessorForm from '../../components/Forms/Profile/ProfessorForm'
import SecretaryForm from '../../components/Forms/Profile/SecretaryForm'
import StudentForm from '../../components/Forms/Profile/StudentForm'

class ProfileComponentSelector extends React.Component {
  constructor(props) {
    super(props);
  }

  getComponent() {
    if (this.props.profileData) {
      switch (this.props.profileData.type) {
        case 'mentorprofile': case 'mentor_form':
          return <MentorForm {...this.props}/>
        case 'professorprofile': case 'professor_form':
          return <ProfessorForm {...this.props}/>
        case 'secretaryprofile':
          return <SecretaryForm {...this.props}/>
        case 'studentprofile': case 'student_form':
          return <StudentForm {...this.props}/>
        default:
          return <div />
      }
    }
  }

  render() {
    let profileForm;
    profileForm = this.getComponent(this.props.profileData);

    return (
      <div>
        <Page {...this.props} />
        {profileForm}
      </div>
    )
  }
}

export default ProfileComponentSelector