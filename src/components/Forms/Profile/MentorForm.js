import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class MentorForm extends React.Component {
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
                <Grid item xs={12} sm={3}>
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
                <Grid item xs={12} sm={3}>
                  <TextField
                    required
                    id="email"
                    name="email"
                    label="Email"
                    fullWidth
                    value={this.props.profileData.email || ''}
                    onChange={this.props.handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    id="phone"
                    name="phone"
                    label="Phnoe number"
                    fullWidth
                    value={this.props.profileData.phone || ''}
                    onChange={this.props.handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    id="profesie_mentor"
                    name="profesie_mentor"
                    label="Profession"
                    fullWidth
                    value={this.props.profileData.profesie_mentor || ''}
                    onChange={this.props.handleChange}
                  />
                </Grid>

                <Grid item xs={12} sm={3}>
                  <TextField
                    id="scoietate"
                    name="societate"
                    label="Company"
                    fullWidth
                    value={this.props.profileData.societate || ''}
                    onChange={this.props.handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    id="cod_fiscal"
                    name="cod_fiscal"
                    label="Fiscal Code"
                    fullWidth
                    value={this.props.profileData.cod_fiscal || ''}
                    onChange={this.props.handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    id="reprezentant_legal"
                    name="reprezentant_legal"
                    label="Legal representative"
                    fullWidth
                    value={this.props.profileData.reprezentant_legal || ''}
                    onChange={this.props.handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    id="cont"
                    name="cont"
                    label="Account"
                    fullWidth
                    value={this.props.profileData.cont || ''}
                    onChange={this.props.handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    id="banca_cont"
                    name="banca_cont"
                    label="Bank account"
                    fullWidth
                    value={this.props.profileData.banca_cont || ''}
                    onChange={this.props.handleChange}
                  />
                </Grid>


                <Grid item xs={12} sm={3}>
                  <TextField
                    id="email_sediu"
                    name="email_sediu"
                    label="Headquarters email"
                    fullWidth
                    value={this.props.profileData.email_sediu || ''}
                    onChange={this.props.handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    id="fax_sediu"
                    name="fax_sediu"
                    label="Headquarters fax"
                    fullWidth
                    value={this.props.profileData.fax_sediu || ''}
                    onChange={this.props.handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    id="oras_sediu"
                    name="oras_sediu"
                    label="Headquarters city"
                    fullWidth
                    value={this.props.profileData.oras_sediu || ''}
                    onChange={this.props.handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    id="strada_sediu"
                    name="strada_sediu"
                    label="Headquarters street"
                    fullWidth
                    value={this.props.profileData.strada_sediu || ''}
                    onChange={this.props.handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    id="nr_sediu"
                    name="nr_sediu"
                    label="Headquarters street number"
                    fullWidth
                    value={this.props.profileData.nr_sediu || ''}
                    onChange={this.props.handleChange}
                  />
                </Grid>


                <Grid item xs={12} sm={3}>
                  <TextField
                    id="adresa_stagiu_practica"
                    name="adresa_stagiu_practica"
                    label="Internship address"
                    fullWidth
                    value={this.props.profileData.adresa_stagiu_practica || ''}
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

export default MentorForm