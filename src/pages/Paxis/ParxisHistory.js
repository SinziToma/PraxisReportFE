import React from 'react';
import { withRouter } from "react-router-dom";

import Page from '../../components/Page/Page'
import PraxisTable from '../../components/Table/Table'
import { getAllPraxis, getEditablePraxisForm, updatePraxis, updatePraxisStatus } from '../../utils/requests';
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
        updatePraxisStatus(praxisData.id, true, null)
        .then((res) => {
            this.setState({ praxisData: res.body })
        });
    }

    handleDeclineClick = (praxisData) => {
        // TO DO pop up maybe where she can write message/cancel and then save status declined or smth
    }

    handleEditClick = (praxisData) => {
        getEditablePraxisForm(praxisData.id)
        .then((res) => {
            this.props.history.push({
                pathname: 'praxis-history/edit-praxis',
                state: { praxisData: res.body, praxisId: profileData.id }
            })
        }).catch((ex) => {
          // TO DO
        })
    }

    handleDownloadClick = (praxisData) => {
        generateConventie({
            nume: "Test Name",
            cetatenie: "Grec",
            oras: "Timbuktu",
            strada: "Garii",
            nr_cladire: "15",
            apartament: "",
            judet: "Polonia",
            telefon: "123123123",
            email: "test@test.com",
            cnp: "342124132421342134",
            serie_ci: "44",
            nr_ci: "231432",
            data_nasterii:"15",
            locul_nasterii: "Asgard",
            an_studiu: "20",
            grupa: "13",
            linie_studiu:"talibans"

        },{
            societate:"Amorteala SRL",
            oras_sediu: "Dambovita",
            strada_sediu: "Avioane",
            nr_sediu:"4143",
            telefon_sediu:"2341241234412",
            fax: "21423412",
            email: "dsfa@asdf",
            cod_fiscal: "31421",
            cont: "RO#$%!@$!@%$@%",
            banca_cont: "Schwanbb",
            nume_mentor: "Ghita",
            profesie_mentor:"Strungar",
            telefon_mentor:"123",
            email_mentor: "afasdf@asdfa",
            reprezentant_legal: "Ionut",
            adresa_stagiu_practica: "str. Cirese, Fundeni"
        },{
            nume: "profesorius",
            functie: "paznic la usa",
            telefon: "1232341234",
            fax: "4321412",
            email: "asdfa@asdfa",
            nr_credite: "14"
        });
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
