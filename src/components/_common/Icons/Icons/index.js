import React from 'react';
import PropTypes from 'prop-types';
import {styles} from './styles';
import {SvgXml} from 'react-native-svg';

import {red, green} from '../svgs';

const Icons = ({name}) => {
  const svgg = getSvg(name);
  return <SvgXml style={styles.img} xml={svgg} />;
};

const getSvg = name => {
  switch (name) {
    case 'red':
      return red;

    default:
      return green;
  }
};

Icons.propTypes = {
  name: PropTypes.string,
};

Icons.defaultProps = {
  name: 'green',
};

export default Icons;
