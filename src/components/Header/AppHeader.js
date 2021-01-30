import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppMenu from './../Menu/AppMenu'

class AppHeader extends React.PureComponent {
  render() {
    return (
      <div className={this.props.styles.root}>
        <AppBar position="static" >
          <Toolbar>
            <AppMenu {...this.props} />
            <Typography className={this.props.styles.title} variant="h6" noWrap>
              UBB documente practica
          </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default AppHeader;