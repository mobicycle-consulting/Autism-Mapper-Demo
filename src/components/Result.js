import React from 'react';
import PropTypes from 'prop-types';
import {CSSTransitionGroup} from 'react-transition-group';
import ResultTable from './ResultTable'
import Report from './Report'
import Diagnosis from './Diagnosis'

function Result(props) {
  const {quizResult} = props
  const rows = []
  for (const categoryNames in quizResult) {
    const score = props.quizResult[categoryNames]
    const row = categoryNames.split(/%/g)
    row.push(score)
    rows.push(row)
  }
  return (
    <CSSTransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}>
      <Diagnosis quizResult={quizResult}/>
      <ResultTable rows={rows}/>
      <Report rows={rows} report={props.report} notes={props.notes}/>
    </CSSTransitionGroup>
  );
}

Result.propTypes = {
  quizResult: PropTypes.object.isRequired,
  report: PropTypes.array.isRequired,
  notes: PropTypes.array.isRequired
};

export default Result;
