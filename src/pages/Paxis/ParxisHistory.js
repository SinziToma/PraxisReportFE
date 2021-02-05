import React from 'react';
import { withRouter } from "react-router-dom";

import Page from '../../components/Page/Page'
import PraxisTable from '../../components/Table/Table'
import { getAllPraxis, getEditablePraxisForm, updatePraxis, updatePraxisStatus } from '../../utils/requests';
import {generateAcord, generateConventie, generateRaport} from '../../utils/pdf';

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
        this.handleRaportClick=this.handleRaportClick.bind(this);
        this.handleAcordClick=this.handleAcordClick.bind(this);
        this.handleConventieClick=this.handleConventieClick.bind(this);
    }

    componentDidMount() {
        getAllPraxis()
            .then((res) => {
                this.setState({ praxisData: res.body });
            }).catch((ex) => {
                //TO DO
                console.log("Waiting because: ");
                console.log(ex);
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
        .then(() => getAllPraxis())
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
                state: { praxisData: res.body, praxisId: praxisData.id }
            })
        }).catch((ex) => {
          // TO DO
        })
    }

    checkValue(inputValue){
        if(inputValue===null){
            return "";
        } else{
            return inputValue.toString();
        }
    }



    handleConventieClick= (praxisData) =>{
        generateConventie(
            {
                nume: this.checkValue(praxisData['student_form']['name']),
                cetatenie: this.checkValue(praxisData['student_form']['cetatenie']),
                oras: this.checkValue(praxisData['student_form']['oras']),
                strada: this.checkValue(praxisData['student_form']['strada']),
                nr_cladire: this.checkValue(praxisData['student_form']['nr_cladire']),
                apartament: this.checkValue(praxisData['student_form']['apartament']),
                judet: this.checkValue(praxisData['student_form']['judet']),
                telefon: this.checkValue(praxisData['student_form']['phone']),
                email: this.checkValue(praxisData['student_form']['email']),
                cnp: this.checkValue(praxisData['student_form']['cnp']),
                serie_ci: this.checkValue(praxisData['student_form']['serie_ci']),
                nr_ci: this.checkValue(praxisData['student_form']['nr_ci']),
                data_nasterii:this.checkValue(praxisData['student_form']['data_nasterii']),
                locul_nasterii: this.checkValue(praxisData['student_form']['locul_nasterii']),
                an_studiu: this.checkValue(praxisData['student_form']['an_studiu']),
                grupa: this.checkValue(praxisData['student_form']['grupa']),
                specializarea: this.checkValue(praxisData['student_form']['specializare']),
                linie_studiu:this.checkValue(praxisData['student_form']['facultate'])

            },
            {
                societate: this.checkValue(praxisData['mentor_form']['societate']),
                oras_sediu:  this.checkValue(praxisData['mentor_form']['oras_sediu']),
                strada_sediu:  this.checkValue(praxisData['mentor_form']['strada_sediu']),
                nr_sediu: this.checkValue(praxisData['mentor_form']['nr_sediu']),
                telefon_sediu: this.checkValue(praxisData['mentor_form']['telefon_sediu']),
                fax:  this.checkValue(praxisData['mentor_form']['fax_sediu']),
                email:  this.checkValue(praxisData['mentor_form']['email_sediu']),
                cod_fiscal:  this.checkValue(praxisData['mentor_form']['cod_fiscal']),
                cont:  this.checkValue(praxisData['mentor_form']['cont']),
                banca_cont:  this.checkValue(praxisData['mentor_form']['banca_cont']),
                nume_mentor:  this.checkValue(praxisData['mentor_form']['name']),
                profesie_mentor: this.checkValue(praxisData['mentor_form']['profesie_mentor']),
                telefon_mentor: this.checkValue(praxisData['mentor_form']['phone']),
                fax_mentor: this.checkValue(praxisData['mentor_form']['fax_sediu']),
                email_mentor:  this.checkValue(praxisData['mentor_form']['email']),
                reprezentant_legal:  this.checkValue(praxisData['mentor_form']['reprezentant_legal']),
                profesie_reprezentant:  this.checkValue(praxisData['mentor_form']['profesie_mentor']),
                adresa_stagiu_practica:  this.checkValue(praxisData['mentor_form']['adresa_stagiu_practica'])
            },
            {
                nume:  this.checkValue(praxisData['professor_form']['name']),
                functie:  this.checkValue(praxisData['professor_form']['functie']),
                telefon:  this.checkValue(praxisData['professor_form']['phone']),
                fax:  this.checkValue(praxisData['professor_form']['fax']),
                email:  this.checkValue(praxisData['professor_form']['email']),
                nr_credite:  this.checkValue(praxisData['nr_credite'])
            },
            {
                durata:this.checkValue( praxisData['nr_credite']),
                data_inceput:this.checkValue( praxisData['nr_credite']),
                data_sfarsit: this.checkValue(praxisData['nr_credite']),
            });
    }


    handleAcordClick = (praxisData) => {
        generateAcord({
                nume: this.checkValue(praxisData['student_form']['name']),
                cetatenie: this.checkValue(praxisData['student_form']['cetatenie']),
                oras: this.checkValue(praxisData['student_form']['oras']),
                strada: this.checkValue(praxisData['student_form']['strada']),
                nr_cladire: this.checkValue(praxisData['student_form']['nr_cladire']),
                apartament: this.checkValue(praxisData['student_form']['apartament']),
                judet: this.checkValue(praxisData['student_form']['judet']),
                telefon: this.checkValue(praxisData['student_form']['phone']),
                email: this.checkValue(praxisData['student_form']['email']),
                cnp: this.checkValue(praxisData['student_form']['cnp']),
                serie_ci: this.checkValue(praxisData['student_form']['serie_ci']),
                nr_ci: this.checkValue(praxisData['student_form']['nr_ci']),
                data_nasterii:this.checkValue(praxisData['student_form']['data_nasterii']),
                locul_nasterii: this.checkValue(praxisData['student_form']['locul_nasterii']),
                an_studiu: this.checkValue(praxisData['student_form']['an_studiu']),
                grupa: this.checkValue(praxisData['student_form']['grupa']),
                specializarea: this.checkValue(praxisData['student_form']['specializare']),
                linie_studiu:this.checkValue(praxisData['student_form']['facultate'])

            },
            {
                societate: this.checkValue(praxisData['mentor_form']['societate']),
                oras_sediu:  this.checkValue(praxisData['mentor_form']['oras_sediu']),
                strada_sediu:  this.checkValue(praxisData['mentor_form']['strada_sediu']),
                nr_sediu: this.checkValue(praxisData['mentor_form']['nr_sediu']),
                telefon_sediu: this.checkValue(praxisData['mentor_form']['telefon_sediu']),
                fax:  this.checkValue(praxisData['mentor_form']['fax_sediu']),
                email:  this.checkValue(praxisData['mentor_form']['email_sediu']),
                cod_fiscal:  this.checkValue(praxisData['mentor_form']['cod_fiscal']),
                cont:  this.checkValue(praxisData['mentor_form']['cont']),
                banca_cont:  this.checkValue(praxisData['mentor_form']['banca_cont']),
                nume_mentor:  this.checkValue(praxisData['mentor_form']['name']),
                profesie_mentor: this.checkValue(praxisData['mentor_form']['profesie_mentor']),
                telefon_mentor: this.checkValue(praxisData['mentor_form']['phone']),
                fax_mentor: this.checkValue(praxisData['mentor_form']['fax_sediu']),
                email_mentor:  this.checkValue(praxisData['mentor_form']['email']),
                reprezentant_legal:  this.checkValue(praxisData['mentor_form']['reprezentant_legal']),
                profesie_reprezentant:  this.checkValue(praxisData['mentor_form']['profesie_mentor']),
                adresa_stagiu_practica:  this.checkValue(praxisData['mentor_form']['adresa_stagiu_practica'])
            },
            {
                nume:  this.checkValue(praxisData['professor_form']['name']),
                functie:  this.checkValue(praxisData['professor_form']['functie']),
                telefon:  this.checkValue(praxisData['professor_form']['phone']),
                fax:  this.checkValue(praxisData['professor_form']['fax']),
                email:  this.checkValue(praxisData['professor_form']['email']),
                nr_credite:  this.checkValue(praxisData['nr_credite'])
            },
            {
                durata:this.checkValue( praxisData['nr_credite']),
                data_inceput:this.checkValue( praxisData['nr_credite']),
                data_sfarsit: this.checkValue(praxisData['nr_credite']),
            });
    }


    handleRaportClick= (praxisData) =>{
        generateRaport(
            {
                nume: this.checkValue(praxisData['student_form']['name']),
                cetatenie: this.checkValue(praxisData['student_form']['cetatenie']),
                oras: this.checkValue(praxisData['student_form']['oras']),
                strada: this.checkValue(praxisData['student_form']['strada']),
                nr_cladire: this.checkValue(praxisData['student_form']['nr_cladire']),
                apartament: this.checkValue(praxisData['student_form']['apartament']),
                judet: this.checkValue(praxisData['student_form']['judet']),
                telefon: this.checkValue(praxisData['student_form']['phone']),
                email: this.checkValue(praxisData['student_form']['email']),
                cnp: this.checkValue(praxisData['student_form']['cnp']),
                serie_ci: this.checkValue(praxisData['student_form']['serie_ci']),
                nr_ci: this.checkValue(praxisData['student_form']['nr_ci']),
                data_nasterii:this.checkValue(praxisData['student_form']['data_nasterii']),
                locul_nasterii: this.checkValue(praxisData['student_form']['locul_nasterii']),
                an_studiu: this.checkValue(praxisData['student_form']['an_studiu']),
                grupa: this.checkValue(praxisData['student_form']['grupa']),
                specializarea: this.checkValue(praxisData['student_form']['specializare']),
                linie_studiu:this.checkValue(praxisData['student_form']['facultate'])

            },
            {
                societate: this.checkValue(praxisData['mentor_form']['societate']),
                oras_sediu:  this.checkValue(praxisData['mentor_form']['oras_sediu']),
                strada_sediu:  this.checkValue(praxisData['mentor_form']['strada_sediu']),
                nr_sediu: this.checkValue(praxisData['mentor_form']['nr_sediu']),
                telefon_sediu: this.checkValue(praxisData['mentor_form']['telefon_sediu']),
                fax:  this.checkValue(praxisData['mentor_form']['fax_sediu']),
                email:  this.checkValue(praxisData['mentor_form']['email_sediu']),
                cod_fiscal:  this.checkValue(praxisData['mentor_form']['cod_fiscal']),
                cont:  this.checkValue(praxisData['mentor_form']['cont']),
                banca_cont:  this.checkValue(praxisData['mentor_form']['banca_cont']),
                nume_mentor:  this.checkValue(praxisData['mentor_form']['name']),
                profesie_mentor: this.checkValue(praxisData['mentor_form']['profesie_mentor']),
                telefon_mentor: this.checkValue(praxisData['mentor_form']['phone']),
                fax_mentor: this.checkValue(praxisData['mentor_form']['fax_sediu']),
                email_mentor:  this.checkValue(praxisData['mentor_form']['email']),
                reprezentant_legal:  this.checkValue(praxisData['mentor_form']['reprezentant_legal']),
                profesie_reprezentant:  this.checkValue(praxisData['mentor_form']['profesie_mentor']),
                adresa_stagiu_practica:  this.checkValue(praxisData['mentor_form']['adresa_stagiu_practica'])
            },
            {
                nume:  this.checkValue(praxisData['professor_form']['name']),
                functie:  this.checkValue(praxisData['professor_form']['functie']),
                telefon:  this.checkValue(praxisData['professor_form']['phone']),
                fax:  this.checkValue(praxisData['professor_form']['fax']),
                email:  this.checkValue(praxisData['professor_form']['email']),
                nr_credite:  this.checkValue(praxisData['nr_credite'])
            },
            {
                durata:this.checkValue( praxisData['nr_credite']),
                data_inceput:this.checkValue( praxisData['nr_credite']),
                data_sfarsit: this.checkValue(praxisData['nr_credite']),
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
            </div>
        )
    }
}

export default withRouter(PraxisHistory);
