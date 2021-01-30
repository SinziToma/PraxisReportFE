import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class StudentForm extends React.PureComponent {
  render() {
    const classes = this.props.styles;
    return (
      <div>
        <React.Fragment>
          <main className={classes.layout, classes.paperPage}>
            <React.Fragment>
              <Typography variant="h6" gutterBottom>
                Profile
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="name"
                    name="name"
                    label="Name"
                    fullWidth
                    value={this.props.profileData.name || ''}
                    onChange={this.props.handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="phone"
                    name="phone"
                    label="Phone"
                    fullWidth
                    value={this.props.profileData.phone || ''}
                    onChange={this.props.handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="nr_ci"
                    name="nr_ci"
                    label="Nr. CI"
                    fullWidth
                    value={this.props.profileData.nr_ci || ''}
                    onChange={this.props.handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="serie_ci"
                    name="serie_ci"
                    label="Serie CI"
                    fullWidth
                    value={this.props.profileData.serie_ci || ''}
                    onChange={this.props.handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="cnp"
                    name="cnp"
                    label="CNP"
                    fullWidth
                    value={this.props.profileData.cnp || ''}
                    onChange={this.props.handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="cetatenie"
                    name="cetatenie"
                    label="Citizenship"
                    fullWidth
                    value={this.props.profileData.cetatenie || ''}
                    onChange={this.props.handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="data_nasterii"
                    name="data_nasterii"
                    label="Date of birth"
                    fullWidth
                    value={this.props.profileData.data_nasterii || ''}
                    onChange={this.props.handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="locul_nasterii"
                    name="locul_nasterii"
                    label="Place of birth"
                    fullWidth
                    value={this.props.profileData.locul_nasterii || ''}
                    onChange={this.props.handleChange}
                  />
                </Grid>



                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="judet"
                    name="judet"
                    label="District"
                    fullWidth
                    value={this.props.profileData.judet || ''}
                    onChange={this.props.handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="oras"
                    name="oras"
                    label="City"
                    fullWidth
                    value={this.props.profileData.oras || ''}
                    onChange={this.props.handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="strada"
                    name="strada"
                    label="Street"
                    fullWidth
                    value={this.props.profileData.strada || ''}
                    onChange={this.props.handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    required
                    id="nr_cladire"
                    name="nr_cladire"
                    label="Building number"
                    fullWidth
                    value={this.props.profileData.nr_cladire || ''}
                    onChange={this.props.handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    required
                    id="apartament"
                    name="apartament"
                    label="Apartament number"
                    fullWidth
                    value={this.props.profileData.apartament || ''}
                    onChange={this.props.handleChange}
                  />
                </Grid>



                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="an_studiu"
                    name="an_studiu"
                    label="Year of study"
                    fullWidth
                    value={this.props.profileData.an_studiu || ''}
                    onChange={this.props.handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="grupa"
                    name="grupa"
                    label="Group"
                    fullWidth
                    value={this.props.profileData.grupa || ''}
                    onChange={this.props.handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="specializare"
                    name="specializare"
                    label="Specialization"
                    fullWidth
                    value={this.props.profileData.specializare || ''}
                    onChange={this.props.handleChange}
                  />
                </Grid>
              </Grid>
              <Button
                variant="contained"
                color="primary"
                onClick={this.props.onClickSave}
                className={classes.button}
              >Save
              </Button>
            </React.Fragment>
          </main>
        </React.Fragment>
      </div>
    )
  }
}

export default StudentForm;