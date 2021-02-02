import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Row from './CollapseableTable'

class PraxisTable extends React.PureComponent {
    render() {
        return (
            <React.Fragment>
                <main className={this.props.styles.layout, this.props.styles.paperPage}>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell/>
                                    <TableCell align="center">Student email</TableCell>
                                    <TableCell align="center">Professor email</TableCell>
                                    <TableCell align="center">Mentor email</TableCell>
                                    <TableCell align="center">Status</TableCell>
                                    <TableCell align="center">Start date</TableCell>
                                    <TableCell align="center">End date</TableCell>
                                    <TableCell align="center">Number of credits</TableCell>
                                    <TableCell/>
                                    <TableCell/>
                                    <TableCell/>
                                    <TableCell/>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.props.rows.map((row) => (
                                    // <TableRow key={row.id}>
                                    //     <TableCell align="center">{row.student_form.email}</TableCell>
                                    //     <TableCell align="center">{row.professor_form.email}</TableCell>
                                    //     <TableCell align="center">{row.mentor_form.email}</TableCell>
                                    //     <TableCell align="center">{row.status}</TableCell>
                                    //     <TableCell align="center">{row.start_date}</TableCell>
                                    //     <TableCell align="center">{row.end_date}</TableCell>
                                    //     <TableCell align="center">{row.nr_credite}</TableCell>
                                    //     <TableCell onClick={() => this.props.handleEditClick(row)}><EditIcon/></TableCell>
                                    //     <TableCell onClick={() => this.props.handleDownloadClick(row)}><ArrowDownwardIcon/></TableCell>
                                    // </TableRow>
                                    <Row {...this.props} key={row.id} row={row} />
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </main>
            </React.Fragment>
        );
    }
}

export default PraxisTable;