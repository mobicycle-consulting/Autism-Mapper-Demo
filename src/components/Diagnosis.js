import React from 'react';
import PropTypes from 'prop-types';
import {Typography} from '@material-ui/core'

function calculateDiagnosis(quizResult) {
    //INSERT REAL ALGORITHM HERE LATER
    return true
}

function Diagnosis(props) {
    const {quizResult} = props
    const diagnosis = calculateDiagnosis(quizResult)
    switch (diagnosis) {
        case true:
            return <Typography variant="h6" color="inherit" className="diagnosis">
                Diagnosis: Possible Autism Spectrum Disorder
            </Typography>
        case false:
            return <Typography variant="h6" color="inherit" className="diagnosis">
                Diagnosis: No Autism Spectrum Disorder
            </Typography>
        default:
            return <Typography variant="h6" color="inherit" className="diagnosis">
                Diagnosis Unavailable
            </Typography>
    }
}

Diagnosis.propTypes = {
    quizResult: PropTypes.object.isRequired
};

export default Diagnosis;
