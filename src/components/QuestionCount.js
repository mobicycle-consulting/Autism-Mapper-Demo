import React from 'react';
import PropTypes from 'prop-types';
import {Typography} from '@material-ui/core'

function QuestionCount(props) {
  return (
    <Typography variant="subtitle2" color="inherit" className="questionCount">
    Question <span>{props.counter}</span> of <span>{props.total}</span>
  </Typography>
  );
}

QuestionCount.propTypes = {
  counter: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};

export default QuestionCount;
