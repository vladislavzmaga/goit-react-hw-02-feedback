import PropTypes from 'prop-types';

import { StatisticList, StatisticItem } from './FeedbackStatistics.styled';

export const StatisticBox = ({ good, neutral, bad, total, percent }) => {
  return (
    <StatisticList>
      <StatisticItem>
        <p>Good</p>
        <span>{good}</span>
      </StatisticItem>
      <StatisticItem>
        <p>Neutral</p>
        <span>{neutral}</span>
      </StatisticItem>
      <StatisticItem>
        <p>Bad</p>
        <span>{bad}</span>
      </StatisticItem>
      <StatisticItem>
        <p>Total</p>
        <span>{total()}</span>
      </StatisticItem>
      <StatisticItem>
        <p>Positive feedback</p>
        <span>{percent()}%</span>
      </StatisticItem>
    </StatisticList>
  );
};

StatisticBox.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  percent: PropTypes.func.isRequired,
};
