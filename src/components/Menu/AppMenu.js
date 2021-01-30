import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import { AddToPhotos, AccountBox, Folder, ExitToApp } from '@material-ui/icons';

class AppMenu extends React.PureComponent {
  render() {
    return (
      <div>
        <React.Fragment key={'left'}>
          <IconButton
            edge="start"
            className={this.props.styles.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={this.props.toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <SwipeableDrawer
            open={this.props.open}
            onClose={this.props.toggleDrawer}
            onOpen={this.props.toggleDrawer}
          >
            <div
              className={this.props.styles.list}
              role="presentation"
            >
              <List>
              <ListItem>
                  <ListItemIcon><AccountBox/></ListItemIcon>
                  <Link href="/profile">{"Profile"}</Link>
                </ListItem>
                <Divider/>
                <ListItem>
                  <ListItemIcon><AddToPhotos/></ListItemIcon>
                  <Link href="/new-praxis">{"New praxis report"}</Link>
                </ListItem>
                <ListItem>
                  <ListItemIcon><Folder/></ListItemIcon>
                  <Link href="/history">{"History"}</Link>
                </ListItem>
                <Divider/>
                <ListItem>
                  <ListItemIcon><ExitToApp/></ListItemIcon>
                  <Link href="/login">{"Log out"}</Link>
                </ListItem>
              </List>
            </div>
          </SwipeableDrawer>
        </React.Fragment>
      </div>
    );
  }
}

export default AppMenu;