import { StatisticWrapper, StatisticTitle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <StatisticWrapper>
      <StatisticTitle>{title}</StatisticTitle>
      {children}
    </StatisticWrapper>
  );
};
