import PropTypes from 'prop-types';

import { StatisticWrapper, StatisticTitle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <StatisticWrapper>
      <StatisticTitle>{title}</StatisticTitle>
      {children}
    </StatisticWrapper>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
