import React from 'react';
import { withRouter } from "react-router-dom";

import Page from '../../components/Page/Page'
import PraxisTable from '../../components/Table/Table'
import { getAllPraxis, updatePraxis } from '../../utils/requests';
import {generateConventie} from '../../utils/pdf';

class PraxisHistory extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            praxisData: []
        }

        this.updatePraxisReport = this.updatePraxisReport.bind(this);
        this.handleAcceptClick = this.handleAcceptClick.bind(this);
        this.handleDeclineClick = this.handleDeclineClick.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleDownloadClick = this.handleDownloadClick.bind(this);
    }

    componentDidMount() {
        getAllPraxis()
            .then((res) => {
                this.setState({ praxisData: res.body });
            }).catch((ex) => {
                //TO DO
            })
    }

    updatePraxisReport = (praxisData) => {
        updatePraxis(praxisData)
            .then((res) => {
                this.setState({ praxisData: res.body });
            }).catch((ex) => {

            });
    }

    handleAcceptClick = (praxisData) => {
        // TO DO status finished or smth
        praxisData.status = "completed"
        updatePraxis(praxisData)
            .then((res) => {
                this.setState({ praxisData: res.body });
            }).catch((ex) => {

            });
    }

    handleDeclineClick = (praxisData) => {
        // TO DO pop up maybe where she can write message/cancel and then save status declined or smth
    }

    handleEditClick = (praxisData) => {
        getEditablePraxisForm(profileData.id)
        .then((res) => {
            this.props.history.push({
                pathname: 'praxis-history/edit-praxis',
                state: { praxisData: res.body, praxisId: profileData.id }
            })

          //this.setState({ profileData: res.body });
        }).catch((ex) => {
          // TO DO
        })

        // this.props.history.push({
        //     pathname: 'praxis-history/edit-praxis',
        //     state: { praxisData: praxisData }
        // })
    }

    handleDownloadClick = (praxisData) => {
        generateConventie("Test TEXT");
    }

    render() {
        return (
            <div>
                <Page {...this.props} />
                <PraxisTable
                    {...this.props}
                    rows={this.state.praxisData}
                    handleAcceptClick={this.handleAcceptClick}
                    handleDeclineClick={this.handleDeclineClick}
                    handleEditClick={this.handleEditClick}
                    handleDownloadClick={this.handleDownloadClick}
                />
            </div>
        )
    }
}

export default withRouter(PraxisHistory);
