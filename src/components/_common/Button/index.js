import React from 'react';
import PropTypes from 'prop-types';
import theme from '../../themes/default'

import {CustomButton} from './styles';

const Button = ({height}) => {
  return (
    <CustomButton
      height={height}
    />
  );
};

Button.propTypes = {
  height: PropTypes.number,
};

Button.defaultProps = {
  height: 40,
}
export default Button;