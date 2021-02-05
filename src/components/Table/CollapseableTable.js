import React from 'react';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import EditIcon from '@material-ui/icons/Edit';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import EventBusyIcon from '@material-ui/icons/EventBusy';

import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CancelIcon from '@material-ui/icons/Cancel';

import ClearIcon from '@material-ui/icons/Clear';
import CheckIcon from '@material-ui/icons/Check';
import { Clear } from '@material-ui/icons';

class Row extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            open: false
        }
    }

    setOpen() {
        this.setState({ open: !this.state.open });
    }

    render() {
        let row = this.props.row;

        return (
            <React.Fragment>
                <TableRow key={row.id} className={this.props.styles.rootTable}>
                    <TableCell>
                        <IconButton aria-label="expand row" size="small" onClick={() => this.setOpen()}>
                            {this.state.open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </IconButton>
                    </TableCell>
                    <TableCell align="center">{row.student_form.email}</TableCell>
                    <TableCell align="center">{row.professor_form.email}</TableCell>
                    <TableCell align="center">{row.mentor_form.email}</TableCell>
                    <TableCell align="center">{row.status}</TableCell>
                    <TableCell align="center">{row.start_date}</TableCell>
                    <TableCell align="center">{row.end_date}</TableCell>
                    <TableCell align="center">{row.nr_credite}</TableCell>
                    <TableCell onClick={() => this.props.handleAcceptClick(row)}><CheckIcon/></TableCell>
                    <TableCell onClick={() => this.props.handleDeclineClick(row)}><ClearIcon/></TableCell>
                    <TableCell onClick={() => this.props.handleEditClick(row)}><EditIcon/></TableCell>
                    <TableCell onClick={() => this.props.handleRaportClick(row)}>Raport <SaveAltIcon/></TableCell>
                    <TableCell onClick={() => this.props.handleAcordClick(row)}>Acord <SaveAltIcon/></TableCell>
                    <TableCell onClick={() => this.props.handleConventieClick(row)}>Conventie <SaveAltIcon/></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={14}>
                        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                            <Box margin={1}>
                                <Typography variant="h6" gutterBottom component="div">
                                    Student information
                                </Typography>
                                <Table size="small" aria-label="purchases">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="center">Nume</TableCell>
                                            <TableCell align="center">Telefon</TableCell>
                                            <TableCell align="center">Nr. CI</TableCell>
                                            <TableCell align="center">Serie CI</TableCell>
                                            <TableCell align="center">CNP</TableCell>
                                            <TableCell align="center">Cetățenie</TableCell>
                                            <TableCell align="center">Data nașterii</TableCell>
                                            <TableCell align="center">Locul nașterii</TableCell>
                                            <TableCell align="center">Județ</TableCell>
                                            <TableCell align="center">Oraș</TableCell>
                                            <TableCell align="center">Strada</TableCell>
                                            <TableCell align="center">Nr.</TableCell>
                                            <TableCell align="center">Apartament</TableCell>
                                            <TableCell align="center">An de studiu</TableCell>
                                            <TableCell align="center" >Grupa</TableCell>
                                            <TableCell align="center">Spcializarea</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow key={row.student_form.id}>
                                            <TableCell align="center">{row.student_form.name || ''}</TableCell>
                                            <TableCell align="center">{row.student_form.phone || ''}</TableCell>
                                            <TableCell align="center">{row.student_form.nr_ci || ''}</TableCell>
                                            <TableCell align="center">{row.student_form.serie_ci || ''}</TableCell>
                                            <TableCell align="center">{row.student_form.cnp || ''}</TableCell>
                                            <TableCell align="center">{row.student_form.cetatenie || ''}</TableCell>
                                            <TableCell align="center">{row.student_form.data_nasterii || ''}</TableCell>
                                            <TableCell align="center">{row.student_form.locul_nasterii || ''}</TableCell>
                                            <TableCell align="center">{row.student_form.judet || ''}</TableCell>
                                            <TableCell align="center">{row.student_form.oras || ''}</TableCell>
                                            <TableCell align="center">{row.student_form.strada || ''}</TableCell>
                                            <TableCell align="center">{row.student_form.nr_cladire || ''}.</TableCell>
                                            <TableCell align="center">{row.student_form.nr_apartament || ''}</TableCell>
                                            <TableCell align="center">{row.student_form.an_studiu || ''}</TableCell>
                                            <TableCell align="center">{row.student_form.grupa || ''}</TableCell>
                                            <TableCell align="center">{row.student_form.specializare || ''}</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>

                                <Typography variant="h6" gutterBottom component="div">
                                    Professor information
                                </Typography>
                                <Table size="small" aria-label="purchases">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="center">Nume</TableCell>
                                            <TableCell align="center">Telefon</TableCell>
                                            <TableCell align="center">Fax</TableCell>
                                            <TableCell align="center">Poziție</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow key={row.student_form.id}>
                                            <TableCell align="center">{row.professor_form.name || ''}</TableCell>
                                            <TableCell align="center">{row.professor_form.phone || ''}</TableCell>
                                            <TableCell align="center">{row.professor_form.fax || ''}</TableCell>
                                            <TableCell align="center">{row.professor_form.position || ''}</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>

                                <Typography variant="h6" gutterBottom component="div">
                                    Mentor information
                                </Typography>
                                <Table size="small" aria-label="purchases">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="center">Nume</TableCell>
                                            <TableCell align="center">Telefon</TableCell>
                                            <TableCell align="center">Profesie</TableCell>
                                            <TableCell align="center">Poziție</TableCell>
                                            <TableCell align="center">Firmă</TableCell>
                                            <TableCell align="center">Cod Fiscal</TableCell>
                                            <TableCell align="center">Reprezentant legal</TableCell>
                                            <TableCell align="center">Cont bancar</TableCell>
                                            <TableCell align="center">Numele băncii</TableCell>
                                            <TableCell align="center">(Sediu) email</TableCell>
                                            <TableCell align="center">(Sediu) fax</TableCell>
                                            <TableCell align="center">(Sediu) oraș</TableCell>
                                            <TableCell align="center">(Sediu) strada</TableCell>
                                            <TableCell align="center">(Sediu) număr</TableCell>
                                            <TableCell align="center">Addresă desf. Practică</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                            <TableRow key={row.student_form.id}>
                                                <TableCell align="center">{row.mentor_form.name || ''}</TableCell>
                                                <TableCell align="center">{row.mentor_form.phone || ''}</TableCell>
                                                <TableCell align="center">{row.mentor_form.profesie_mentor || ''}</TableCell>
                                                <TableCell align="center">{row.mentor_form.functie || ''}</TableCell>
                                                <TableCell align="center">{row.mentor_form.societate || ''}</TableCell>
                                                <TableCell align="center">{row.mentor_form.cod_fiscal || ''}</TableCell>
                                                <TableCell align="center">{row.mentor_form.reprezentant_legal || ''}</TableCell>
                                                <TableCell align="center">{row.mentor_form.cont || ''}</TableCell>
                                                <TableCell align="center">{row.mentor_form.banca_cont || ''}</TableCell>
                                                <TableCell align="center">{row.mentor_form.email_sediu || ''}</TableCell>
                                                <TableCell align="center">{row.mentor_form.fax_sediu || ''}</TableCell>
                                                <TableCell align="center">{row.mentor_form.oras_sediu || ''}</TableCell>
                                                <TableCell align="center">{row.mentor_form.strada_sediu || ''}</TableCell>
                                                <TableCell align="center">{row.mentor_form.nr_sediu || ''}</TableCell>
                                                <TableCell align="center">{row.mentor_form.adresa_stagiu_practica || ''}</TableCell>
                                            </TableRow>
                                    </TableBody>
                                </Table>
                            </Box>
                        </Collapse>
                    </TableCell>
                </TableRow>
            </React.Fragment>
        );
    }
}

export default Row;
