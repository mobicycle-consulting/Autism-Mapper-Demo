import React from 'react';
import PropTypes from 'prop-types';
import {CSSTransitionGroup} from 'react-transition-group';
import {TextField, MenuItem, Button} from '@material-ui/core'
import RateReviewIcon from '@material-ui/icons/RateReview';
import {makeStyles} from '@material-ui/core/styles';
import {Typography} from '@material-ui/core'

const ethnicities = [
    "African",
    "Carribean",
    "Asian",
    "Middle Eastern",
    "Latinx",
    "Indigenous",
    "Causcasian",
    "Other"
]

const maritalStatus = ["Married", "Single", "Other"]

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch'
        }
    },
    button: {
        margin: theme.spacing(1)
    }
}));

function getFormData(onUserSubmitted) {
    const fields = [
        "title",
        "firstName",
        "lastName",
        "name",
        "gender",
        "address",
        "postcode",
        "nhsNumber",
        "schoolName",
        "schoolYear"
    ]
    return (e) => {
        e.preventDefault();
        const {elements} = e.target
        const data = fields.reduce((cur, field) => {
            return {
                ...cur,
                [field]: elements[field].value
            }
        }, {})
        onUserSubmitted(data)
    }
}

function UserForm(props) {
    const {onUserSubmitted} = props
    const classes = useStyles();
    return (
        <CSSTransitionGroup
            className="container result"
            component="div"
            transitionName="fade"
            transitionEnterTimeout={800}
            transitionLeaveTimeout={500}
            transitionAppear
            transitionAppearTimeout={500}>
            <Typography variant="subtitle1" gutterBottom className="App-intro">
                Person being assessed's details
            </Typography>
            <form
                noValidate
                className={classes.root}
                autoComplete="off"
                onSubmit={getFormData(onUserSubmitted)}
                id="userForm">
                <TextField id="title" variant="filled" label="Title"/>
                <TextField id="firstName" variant="filled" label="First Name"/>
                <TextField id="lastName" variant="filled" label="Last Name"/>
                <TextField id="name" variant="filled" label="Preferred Name"/>
                <TextField id="gender" variant="filled" label="Gender"/>
                <TextField id="address" variant="filled" label="Home Address"/>
                <TextField id="postcode" variant="filled" label="Postcode"/>
                <TextField id="nhsNumber" variant="filled" label="NHS Number"/>
                <TextField id="ethnicity" select label="Ethnicity" variant="filled">
                    {ethnicities.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField id="maritalStatus" select label="Marital Status" variant="filled">
                    {maritalStatus.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="schoolName"
                    variant="filled"
                    label="School Name (if applicable)"/>
                <TextField
                    id="schoolYear"
                    variant="filled"
                    label="School Year (if applicable)"/>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    startIcon={< RateReviewIcon />}
                    type="submit">
                    Begin Assessment
                </Button>
            </form>
        </CSSTransitionGroup>
    );
}

UserForm.propTypes = {
    onUserSubmitted: PropTypes.func.isRequired
};

export default UserForm;
