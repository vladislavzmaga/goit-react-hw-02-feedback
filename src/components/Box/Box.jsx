import PropTypes from 'prop-types';

import { Wrapper } from './Box.styled';

export const Box = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

Box.propTypes = {
  children: PropTypes.node.isRequired,
};
