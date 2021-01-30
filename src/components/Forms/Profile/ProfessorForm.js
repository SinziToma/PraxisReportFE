import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class ProfessorForm extends React.Component {
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
                    id="email"
                    name="email"
                    label="Email"
                    fullWidth
                    value={this.props.profileData.email || ''}
                    onChange={this.props.handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="phone"
                    name="phone"
                    label="Phnoe number"
                    fullWidth
                    value={this.props.profileData.phone || ''}
                    onChange={this.props.handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="fax"
                    name="fax"
                    label="Fax"
                    fullWidth
                    value={this.props.profileData.fax || ''}
                    onChange={this.props.handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="functie"
                    name="functie"
                    label="Position"
                    fullWidth
                    value={this.props.profileData.functie || ''}
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

export default ProfessorForm