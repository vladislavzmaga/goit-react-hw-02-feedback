import React from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { StatisticBox } from './FeedbackStatistics/FeedbackStatistics';
import { Notification } from './Notification/Notification';
import { Box } from './Box/Box';
import { Section } from './Section/Section';
export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onGoodFeedback = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  onNeutralFeedback = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  onBadFeedback = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const totalFeedback = Object.values(this.state).reduce(
      (acc, item) => (acc += item),
      0
    );
    return totalFeedback;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const parcent = (this.state.good * 100) / total;
    return parcent.toFixed();
  };

  render() {
    const total = this.countTotalFeedback();
    return (
      <Box>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            good={this.onGoodFeedback}
            neutral={this.onNeutralFeedback}
            bad={this.onBadFeedback}
          />
        </Section>
        <Section title={'Statistics'}>
          {total > 0 ? (
            <StatisticBox
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback}
              percent={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Box>
    );
  }
}
