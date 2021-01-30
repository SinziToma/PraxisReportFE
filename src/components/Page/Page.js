import React from 'react';
import AppHeader from './../Header/AppHeader';

class Page extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
        };

        this.toggleDrawer = this.toggleDrawer.bind(this);
    }

    toggleDrawer = () => {
        this.setState(({ open: !this.state.open }));
    };

    render() {
        return (
            <div>
                <AppHeader
                    {...this.props}
                    open={this.state.open}
                    toggleDrawer={this.toggleDrawer}
                />
            </div>
        );
    }
}

export default Page;