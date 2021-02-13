import React from 'react';
import PropTypes from 'prop-types';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography
} from '@material-ui/core'

import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    table: {
        minWidth: 650
    },
    heading:{
        paddingLeft:0
    }
});

function ResultTable(props) {
    const {rows} = props
    const classes = useStyles();
    return (
        <React.Fragment>
            <Typography variant="subtitle1" color="inherit">
                    Breakdown
                </Typography>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table" variant="dense">
                    <TableHead>
                        <TableRow>
                            <TableCell>Category</TableCell>
                            <TableCell>Sub Category 1</TableCell>
                            <TableCell>Sub Category 2</TableCell>
                            <TableCell>Score</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row[0]}>
                                <TableCell component="th" scope="row">{row[0]}</TableCell>
                                <TableCell>{row[1]}</TableCell>
                                <TableCell>{row[2]}</TableCell>
                                <TableCell>{row[3]}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </React.Fragment>
    )
}

ResultTable.propTypes = {
    rows: PropTypes.array.isRequired
};

export default ResultTable;