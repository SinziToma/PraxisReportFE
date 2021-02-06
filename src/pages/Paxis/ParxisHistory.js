import React from 'react';
import { withRouter } from "react-router-dom";

import Page from '../../components/Page/Page';
import PraxisTable from '../../components/Table/Table';
import DialogForm from './../../components/Dialog/FormDialog';
import { getAllPraxis, getEditablePraxisForm, updatePraxis, updatePraxisStatus, getAllPraxisObjects } from '../../utils/requests';
import { generateAcord, generateConventie, generateRaport } from '../../utils/pdf';

class PraxisHistory extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            praxisData: [],
            dialogFormOpen: false,
            updatePraxisStatus: '',
            selectedPraxis: null,
            profileType: null
        }

        this.handleAcceptClick = this.handleAcceptClick.bind(this);
        this.handleDeclineClick = this.handleDeclineClick.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleRaportClick = this.handleRaportClick.bind(this);
        this.handleAcordClick = this.handleAcordClick.bind(this);
        this.handleConventieClick = this.handleConventieClick.bind(this);

        this.handleDeclineSave = this.handleDeclineSave.bind(this);
        this.handleFormDialogClose = this.handleFormDialogClose.bind(this);
        this.handleDialogChange = this.handleDialogChange.bind(this);
    }

    componentDidMount() {
        if (localStorage.getItem('profileType') == 'secretaryprofile') {
            getAllPraxisObjects()
            .then((res) => {
                this.setState({ praxisData: res.body });
            }).catch((ex) => {
                //TO DO
            })
        } else {
            getAllPraxis()
                .then((res) => {
                    this.setState({ praxisData: res.body });
                }).catch((ex) => {
                    //TO DO
                })
        }
    }

    handleAcceptClick = (praxisData) => {
        updatePraxisStatus(praxisData.id, true, null)
            .then(() => getAllPraxisObjects()
            .catch(() => {}))
            .then((res) => {
                this.setState({ praxisData: res.body })
            });
    }

    handleDeclineClick = (praxisData) => {
        this.setState({ selectedPraxis: praxisData, dialogFormOpen: true });
    }

    handleDeclineSave = () => {
        updatePraxisStatus(this.state.selectedPraxis.id, false, this.state.updatePraxisStatus)
            .then(() => getAllPraxisObjects()
            .then((res) => {
                this.setState({ praxisData: res.body, selectedPraxis: null, dialogFormOpen: false });
            }).catch(() => {}))
           
    }

    handleFormDialogClose = () => {
        this.setState({ selectedPraxis: null, dialogFormOpen: false });
    }

    handleDialogChange({ target }) {
        this.setState({ updatePraxisStatus: target.value });
    }

    handleEditClick = (praxisData) => {
        getEditablePraxisForm(praxisData.id)
            .then((res) => {
                this.props.history.push({
                    pathname: 'praxis-history/edit-praxis',
                    state: { praxisData: res.body, praxisId: praxisData.id }
                })
            }).catch((ex) => {
                // TO DO
            })
    }

    handleConventieClick = (praxisData) => {
        generateConventie(
            {
                nume: "Test Name",
                cetatenie: "Grec",
                oras: "Timbuktu",
                strada: "Garii",
                nr_cladire: "15",
                apartament: "15",
                judet: "Polonia",
                telefon: "123123123",
                email: "test@test.com",
                cnp: "342124132421342134",
                serie_ci: "44",
                nr_ci: "231432",
                data_nasterii: "15.15.15",
                locul_nasterii: "Asgard",
                an_studiu: "20",
                grupa: "13",
                specializarea: "Frecat Menta",
                linie_studiu: "talibans"

            },
            {
                societate: "Amorteala SRL",
                oras_sediu: "Dambovita",
                strada_sediu: "Avioane",
                nr_sediu: "4143",
                telefon_sediu: "2341241234412",
                fax: "21423412",
                email: "dsfa@asdf",
                cod_fiscal: "31421",
                cont: "RO#$%!@$!@%$@%",
                banca_cont: "Schwanbb",
                nume_mentor: "Ghita",
                profesie_mentor: "Strungar",
                telefon_mentor: "123",
                fax_mentor: "123fsdfa",
                email_mentor: "afasdf@asdfa",
                reprezentant_legal: "Ionut",
                profesie_reprezentant: "Fochist",
                adresa_stagiu_practica: "str. Cirese, Fundeni"
            },
            {
                nume: "profesorius",
                functie: "paznic la usa",
                telefon: "1232341234",
                fax: "4321412",
                email: "asdfa@asdfa",
                nr_credite: "14"
            },
            {
                durata: "15 ore",
                data_inceput: "12.12.12",
                data_sfarsit: "12.12.13",
            });
    }


    handleAcordClick = (praxisData) => {
        generateAcord(
            {
                nume: "Test Name",
                cetatenie: "Grec",
                oras: "Timbuktu",
                strada: "Garii",
                nr_cladire: "15",
                apartament: "15",
                judet: "Polonia",
                telefon: "123123123",
                email: "test@test.com",
                cnp: "342124132421342134",
                serie_ci: "44",
                nr_ci: "231432",
                data_nasterii: "15.15.15",
                locul_nasterii: "Asgard",
                an_studiu: "20",
                grupa: "13",
                specializarea: "Frecat Menta",
                linie_studiu: "talibans"

            },
            {
                societate: "Amorteala SRL",
                oras_sediu: "Dambovita",
                strada_sediu: "Avioane",
                nr_sediu: "4143",
                telefon_sediu: "2341241234412",
                fax: "21423412",
                email: "dsfa@asdf",
                cod_fiscal: "31421",
                cont: "RO#$%!@$!@%$@%",
                banca_cont: "Schwanbb",
                nume_mentor: "Ghita",
                profesie_mentor: "Strungar",
                telefon_mentor: "123",
                fax_mentor: "123fsdfa",
                email_mentor: "afasdf@asdfa",
                reprezentant_legal: "Ionut",
                profesie_reprezentant: "Fochist",
                adresa_stagiu_practica: "str. Cirese, Fundeni"
            },
            {
                nume: "profesorius",
                functie: "paznic la usa",
                telefon: "1232341234",
                fax: "4321412",
                email: "asdfa@asdfa",
                nr_credite: "14"
            },
            {
                durata: "15 ore",
                data_inceput: "12.12.12",
                data_sfarsit: "12.12.13",
            });
    }


    handleRaportClick = (praxisData) => {
        generateRaport(
            {
                nume: "Test Name",
                cetatenie: "Grec",
                oras: "Timbuktu",
                strada: "Garii",
                nr_cladire: "15",
                apartament: "15",
                judet: "Polonia",
                telefon: "123123123",
                email: "test@test.com",
                cnp: "342124132421342134",
                serie_ci: "44",
                nr_ci: "231432",
                data_nasterii: "15.15.15",
                locul_nasterii: "Asgard",
                an_studiu: "20",
                grupa: "13",
                specializarea: "Frecat Menta",
                linie_studiu: "talibans"

            },
            {
                societate: "Amorteala SRL",
                oras_sediu: "Dambovita",
                strada_sediu: "Avioane",
                nr_sediu: "4143",
                telefon_sediu: "2341241234412",
                fax: "21423412",
                email: "dsfa@asdf",
                cod_fiscal: "31421",
                cont: "RO#$%!@$!@%$@%",
                banca_cont: "Schwanbb",
                nume_mentor: "Ghita",
                profesie_mentor: "Strungar",
                telefon_mentor: "123",
                fax_mentor: "123fsdfa",
                email_mentor: "afasdf@asdfa",
                reprezentant_legal: "Ionut",
                profesie_reprezentant: "Fochist",
                adresa_stagiu_practica: "str. Cirese, Fundeni"
            },
            {
                nume: "profesorius",
                functie: "paznic la usa",
                telefon: "1232341234",
                fax: "4321412",
                email: "asdfa@asdfa",
                nr_credite: "14"
            },
            {
                durata: "15 ore",
                data_inceput: "12.12.12",
                data_sfarsit: "12.12.13",
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
                    handleRaportClick={this.handleRaportClick}
                    handleAcordClick={this.handleAcordClick}
                    handleConventieClick={this.handleConventieClick}
                />
                <DialogForm {...this.props}
                    open={this.state.dialogFormOpen}
                    handleDeclineSave={this.handleDeclineSave}
                    handleClose={this.handleFormDialogClose}
                    handleDialogChange={this.handleDialogChange}
                    updatePraxisStatus={this.state.updatePraxisStatus}
                />
            </div>
        )
    }
}

export default withRouter(PraxisHistory);
