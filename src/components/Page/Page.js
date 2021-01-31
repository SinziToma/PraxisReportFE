import React from 'react';
import { withRouter } from "react-router-dom";

import AppHeader from './../Header/AppHeader';
import store from './../../redux/store'
import { updateUserInfo } from './../../redux/actions'

class Page extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false
        };

        this.toggleDrawer = this.toggleDrawer.bind(this);
        this.onSelectMenuItem = this.onSelectMenuItem.bind(this);
    }

    toggleDrawer = () => {
        this.setState({ open: !this.state.open });
    };

    onSelectMenuItem = (path) => {
        this.setState({ open: !this.state.open }, () => {
            if(path == '/logout') {
                store.dispatch(updateUserInfo({ type: 'LOGOUT', user: []}));
            }
            this.props.history.replace(path);
        });
    }

    render() {
        return (
            <div>
                <AppHeader
                    {...this.props}
                    open={this.state.open}
                    toggleDrawer={this.toggleDrawer}
                    onSelectMenuItem={this.onSelectMenuItem}
                />
            </div>
        );
    }
}

export default withRouter(Page);