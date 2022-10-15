import PropTypes from 'prop-types';

import { ButtonList, FeedbackBtn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ good, neutral, bad }) => {
  return (
    <ButtonList>
      <li>
        <FeedbackBtn onClick={good}>Good</FeedbackBtn>
      </li>
      <li>
        <FeedbackBtn onClick={neutral}>Neutral</FeedbackBtn>
      </li>
      <li>
        <FeedbackBtn onClick={bad}>Bad</FeedbackBtn>
      </li>
    </ButtonList>
  );
};

FeedbackOptions.propTypes = {
  good: PropTypes.func.isRequired,
  neutral: PropTypes.func.isRequired,
  bad: PropTypes.func.isRequired,
};
