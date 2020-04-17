import styled from 'styled-components/native';
import theme from '../../themes/default';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    height: 50,
    justifyContent: 'center',
    marginTop: 120
  },
  view: {
    marginHorizontal: -12,
    paddingTop: 10
  },
  text: {
    marginTop: 10,
    fontSize: 12,
    marginLeft: 3,
    color:`${theme.colors.ahg_red_base}`,
  },
  row: {
    flexDirection: 'row'
  }
});
