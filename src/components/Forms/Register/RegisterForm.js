import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class RegisterForm extends React.PureComponent {
  render() {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={this.props.styles.paper}>
          <Avatar className={this.props.styles.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={this.props.styles.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="name"
                  variant="outlined"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                  value={this.props.registerInfo.name}
                  onChange={this.props.handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={this.props.registerInfo.email}
                  onChange={this.props.handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={this.props.registerInfo.password}
                  onChange={this.props.handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl
                  variant="outlined"
                  fullWidth
                  required
                >
                  <InputLabel>Position</InputLabel>
                  <Select
                    name="type"
                    label={this.props.registerInfo.position || 'Position'}
                    onChange={this.props.handleChange}
                  >
                    <MenuItem value=""></MenuItem>
                    <MenuItem value={1}>Mentor</MenuItem>
                    <MenuItem value={2}>Professor</MenuItem>
                    {/* <MenuItem value={3}>Secretary</MenuItem> */}
                    <MenuItem value={3}>Student</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={this.props.styles.submit}
              onClick={this.props.register}
            >
              Sign Up
          </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
              </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

export default RegisterForm