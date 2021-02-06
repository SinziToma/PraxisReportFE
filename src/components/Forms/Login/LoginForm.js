import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Container from '@material-ui/core/Container';
import Typography from "@material-ui/core/Typography";

class LoginForm extends React.Component {
  render() {
    const styles = this.props.styles;
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={styles.paper}>
          <Avatar className={styles.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Autentificare
          </Typography>
          <form className={styles.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              value={this.props.loginInfo.email}
              onChange={this.props.handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Parola"
              type="password"
              id="password"
              autoComplete="current-password"
              value={this.props.loginInfo.password}
              onChange={this.props.handleChange}
            />
            {/*<FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />*/}
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={styles.submit}
              onClick={this.props.signIn}
            >
              Autentificare
          </Button>
            <Grid container>
              <Grid item xs>
               {/* <Link href="#" variant="body2">
                  Forgot password?
              </Link>*/}
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Nu ai un cont? Inregistrează-te"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    )
  }
}

export default LoginForm
