import React from 'react';
import {styles} from './styles';
import { Card as PaperCard } from 'react-native-paper';

const Card = ({...props}) => {
  return (
  <PaperCard style={styles.card} {...props}/>
  );
};
export default Card;