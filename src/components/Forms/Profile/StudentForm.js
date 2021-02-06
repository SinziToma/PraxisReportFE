import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class StudentForm extends React.Component {
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
                <Grid item xs={12} sm={3}>
                  <TextField
                    id="name"
                    name="name"
                    label="Nume"
                    fullWidth
                    value={this.props.profileData.name || ''}
                    onChange={this.props.handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    id="phone"
                    name="phone"
                    label="Telefon"
                    type="tel"
                    fullWidth
                    value={this.props.profileData.phone || ''}
                    onChange={this.props.handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="email"
                    name="email"
                    label="Email"
                    type="email"
                    fullWidth
                    value={this.props.profileData.email || ''}
                    onChange={this.props.handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    id="nr_ci"
                    name="nr_ci"
                    label="Nr. CI"
                    fullWidth
                    value={this.props.profileData.nr_ci || ''}
                    onChange={this.props.handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    id="serie_ci"
                    name="serie_ci"
                    label="Serie CI"
                    fullWidth
                    value={this.props.profileData.serie_ci || ''}
                    onChange={this.props.handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    id="cnp"
                    name="cnp"
                    label="CNP"
                    fullWidth
                    value={this.props.profileData.cnp || ''}
                    onChange={this.props.handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    id="cetatenie"
                    name="cetatenie"
                    label="Cetățenie"
                    fullWidth
                    value={this.props.profileData.cetatenie || ''}
                    onChange={this.props.handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    id="data_nasterii"
                    name="data_nasterii"
                    label="Data nașterii"
                    type="date"
                    fullWidth
                    value={this.props.profileData.data_nasterii || "2000-02-02"}
                    onChange={this.props.handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    id="locul_nasterii"
                    name="locul_nasterii"
                    label="Locul nașterii"
                    fullWidth
                    value={this.props.profileData.locul_nasterii || ''}
                    onChange={this.props.handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6} />


                <Grid item xs={12} sm={3}>
                  <TextField
                    id="judet"
                    name="judet"
                    label="Județ"
                    fullWidth
                    value={this.props.profileData.judet || ''}
                    onChange={this.props.handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    id="oras"
                    name="oras"
                    label="Oraș"
                    fullWidth
                    value={this.props.profileData.oras || ''}
                    onChange={this.props.handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    id="strada"
                    name="strada"
                    label="Strada"
                    fullWidth
                    value={this.props.profileData.strada || ''}
                    onChange={this.props.handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={1}>
                  <TextField
                    id="nr_cladire"
                    name="nr_cladire"
                    label="Nr."
                    fullWidth
                    value={this.props.profileData.nr_cladire || ''}
                    onChange={this.props.handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={2}>
                  <TextField
                    id="apartament"
                    name="apartament"
                    label="Apartament"
                    fullWidth
                    value={this.props.profileData.apartament || ''}
                    onChange={this.props.handleChange}
                  />
                </Grid>



                <Grid item xs={12} sm={3}>
                  <TextField
                    id="an_studiu"
                    name="an_studiu"
                    label="An studiu"
                    fullWidth
                    value={this.props.profileData.an_studiu || ''}
                    onChange={this.props.handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    id="grupa"
                    name="grupa"
                    label="Grupa"
                    fullWidth
                    value={this.props.profileData.grupa || ''}
                    onChange={this.props.handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    id="specializare"
                    name="specializare"
                    label="Specializare"
                    fullWidth
                    value={this.props.profileData.specializare || ''}
                    onChange={this.props.handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    id="facultate"
                    name="facultate"
                    label="Facultate"
                    fullWidth
                    value={this.props.profileData.facultate || ''}
                    onChange={this.props.handleChange}
                  />
                </Grid>
                {this.props.isPraxisView ? (
                  <div className={classes.layout, classes.paperPage}>
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <TextField
                          id="professor_email"
                          name="professor_email"
                          label="Email profesor"
                          type="email"
                          fullWidth
                          value={this.props.professor_email ? this.props.professor_email : ''}
                          onChange={this.props.handleChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          id="mentor_email"
                          name="mentor_email"
                          label="Email mentor"
                          type="email"
                          fullWidth
                          value={this.props.mentor_email ? this.props.mentor_email : ''}
                          onChange={this.props.handleChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={this.props.onClickSendEmail}
                          className={classes.button}
                        >Send email
                      </Button>
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          id="start_date"
                          name="start_date"
                          label="Data de start"

                          type="date"
                          fullWidth
                          value={this.props.start_date || "2021-02-06"}
                          onChange={this.props.handleChange}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          id="end_date"
                          name="end_date"
                          label="Data de sfârșit"
                          type="date"
                          fullWidth
                          value={this.props.end_date || "2021-02-14"}

                          InputLabelProps={{
                            shrink: true,
                          }}
                          onChange={this.props.handleChange}
                        />
                      </Grid>
                    </Grid>
                  </div>
                ) : (<div />)}
              </Grid>
              <Button
                variant="contained"
                color="primary"
                onClick={this.props.onClickSave}
                className={classes.button}
              >Salvează
              </Button>
            </React.Fragment>
          </main>
        </React.Fragment>
      </div>
    )
  }
}

export default StudentForm;
