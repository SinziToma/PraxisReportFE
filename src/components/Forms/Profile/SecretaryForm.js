import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class SecretaryForm extends React.Component {
  render() {
    const classes = this.props.styles;
    return (
      <div>
        <React.Fragment>
          <main className={classes.layout, classes.paperPage}>
            <React.Fragment>
              <Typography variant="h6" gutterBottom>
                Profil
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    id="name"
                    name="name"
                    label="Nume"
                    fullWidth
                    value={this.props.profileData.name || ''}
                    onChange={this.props.handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="email"
                    name="email"
                    label="Email"
                    fullWidth
                    value={this.props.profileData.email || ''}
                    onChange={this.props.handleChange}
                  />
                </Grid>
              </Grid>
              <Button
                variant="contained"
                color="primary"
                onClick={this.props.onClickSave}
                className={classes.button}
              >Salveaza
              </Button>
            </React.Fragment>
          </main>
        </React.Fragment>
      </div>
    )
  }
}

export default SecretaryForm;
