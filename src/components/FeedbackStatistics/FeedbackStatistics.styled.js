import styled from 'styled-components';

export const StatisticList = styled.ul`
  background-color: rgb(218, 209, 209);
  padding: 5px;
  border-radius: 5px;
  width: 200px;
  margin: 0 auto;
`;

export const StatisticItem = styled.li`
  display: flex;
  justify-content: space-between;

  :not(:last-child) {
    margin-bottom: 10px;
  }
`;
