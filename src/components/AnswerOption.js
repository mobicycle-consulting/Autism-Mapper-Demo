import React from 'react';
import PropTypes from 'prop-types';
import {Typography} from '@material-ui/core'

function AnswerOption(props) {
  return (
    <li className="answerOption">
      <input
        type="radio"
        className="radioCustomButton"
        name="radioGroup"
        checked={props.answerWeight === props.answer}
        id={props.answerWeight}
        value={props.answerWeight}
        disabled={props.answer}
        onChange={props.onAnswerSelected}/>
      <label className="radioCustomLabel" htmlFor={props.answerWeight}>
        <Typography variant="button" color="inherit">{props.answerContent}</Typography>
      </label>
    </li>
  );
}

AnswerOption.propTypes = {
  answerWeight: PropTypes.number.isRequired,
  answerContent: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default AnswerOption;
