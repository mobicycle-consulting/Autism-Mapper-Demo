import React from 'react';
import PropTypes from 'prop-types';
import {Button} from '@material-ui/core'
import DescriptionIcon from '@material-ui/icons/Description';
import {makeStyles} from '@material-ui/core/styles';
import jsPDF from 'jspdf';
import 'jspdf-autotable'

const FONT_SIZE = {
    REG: 10,
    H1: 40,
    H2: 20

}

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
        "margin-left":0
    }
}));

function genReportPDF(report,notes) {
    const lines = []
    
    return () => {
        for(let i=0;i<report.length;i++){
            lines.push(report[i])
            lines.push(`Notes: ${notes[i]}`)
            lines.push("")
        }
        const doc = new jsPDF()
        doc.setFontSize(FONT_SIZE.REG)
        doc.text(lines, 10, 10)
        doc.save(`AutismMapper-${new Date().toISOString()}.pdf`)
    }
}

function genTablePDF(rows) {
    return () => {
        const doc = new jsPDF()
        doc.autoTable({
            head: [
                ['Category', 'Sub_Category1', 'Sub_Category2', 'Score']
            ],
            body: rows
        })
        doc.save(`AutismMapper Breakdown-${new Date().toISOString()}.pdf`)
    }
}

function ResultTable(props) {
    const classes = useStyles();
    const {rows, report,notes} = props
    return (
        <React.Fragment>
            <Button
                variant="contained"
                color="primary"
                size="large"
                // fullWidth={true}
                className={classes.button}
                startIcon={< DescriptionIcon />}
                onClick={genTablePDF(rows)}>
                Autism Spectrum Breakdown
            </Button>
            <Button
                variant="contained"
                color="primary"
                size="large"
                // fullWidth={true}
                className={classes.button}
                startIcon={< DescriptionIcon />}
                onClick={genReportPDF(report,notes)}>
                Written Report
            </Button>
            <Button
                variant="contained"
                color="primary"
                size="large"
                // fullWidth={true}
                className={classes.button}
                startIcon={< DescriptionIcon />}
                onClick={()=>{window.location.replace("https://www.wellbeing.associates/feedback")}}>
                Give us Some Feedback!
            </Button>
        </React.Fragment>
    )
}

ResultTable.propTypes = {
    rows: PropTypes.array.isRequired,
    report: PropTypes.array.isRequired,
    notes: PropTypes.array.isRequired
};

export default ResultTable;