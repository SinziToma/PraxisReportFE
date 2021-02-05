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
                                    <TableCell align="center">Email student</TableCell>
                                    <TableCell align="center">Email profesor</TableCell>
                                    <TableCell align="center">Email mentor</TableCell>
                                    <TableCell align="center">Status</TableCell>
                                    <TableCell align="center">Dată de start</TableCell>
                                    <TableCell align="center">Dată de sfârșit</TableCell>
                                    <TableCell align="center">Credite</TableCell>
                                    <TableCell/>
                                    <TableCell/>
                                    <TableCell/>
                                    <TableCell/>
                                    <TableCell/>
                                    <TableCell/>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.props.rows.map((row) => (
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
