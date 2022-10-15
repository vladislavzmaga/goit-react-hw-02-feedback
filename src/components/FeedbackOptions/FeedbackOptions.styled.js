import styled from 'styled-components';

export const ButtonList = styled.ul`
  display: flex;
  list-style: none;
  gap: 10px;
  justify-content: center;
  margin-bottom: 15px;
`;

export const FeedbackBtn = styled.button`
  background-color: blue;
  border: none;
  color: white;
  cursor: pointer;
  width: 70px;
  height: 30px;
  border-radius: 5px;
  transition: transform 300ms;

  :hover {
    transform: scale(1.1);
    background-color: blueviolet;
  }
`;
