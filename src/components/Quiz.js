import React from 'react';
import PropTypes from 'prop-types';
import {CSSTransitionGroup} from 'react-transition-group';
import Question from './Question';
import QuestionCount from './QuestionCount';
import AnswerOption from './AnswerOption';
import Notes from './Notes'

function Quiz(props) {
  const [answer,
    setAnswer] = React.useState()
  function renderAnswerOptions(key) {
    return (<AnswerOption
      key={key.Answer}
      answerContent={key.Answer}
      answerWeight={key.Weight}
      answer={props.answer}
      questionId={props.questionId}
      onAnswerSelected={(e) => {
      setAnswer(e.target.value)
    }}/>);
  }
  const notesDone = (data)=>{
      setAnswer(null);
      props.onAnswerSelected(data)
  }
  return (
    <CSSTransitionGroup
      className="container"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}>
      <div key={props.questionId}>
        <QuestionCount counter={props.questionId} total={props.questionTotal}/>
        <Question content={props.question.Question}/> {!answer
          ? <ul className="answerOptions">
              {props
                .answers
                .map(renderAnswerOptions)}
            </ul>
          : <Notes
            answer={answer}
            onAnswerSelected={notesDone}/>}

      </div>
    </CSSTransitionGroup>
  );
}

Quiz.propTypes = {
  answer: PropTypes.string.isRequired,
  answers: PropTypes.array.isRequired,
  question: PropTypes.object.isRequired,
  questionId: PropTypes.number.isRequired,
  questionTotal: PropTypes.number.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default Quiz;
