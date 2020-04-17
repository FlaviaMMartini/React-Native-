import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
import theme from '../../themes/default';

export const Grid = styled.View`
  flex-direction: row;
`;
export const styles = StyleSheet.create({
  title: {
    color: theme.colors.ahg_secondary_darken2,
    fontSize: 20,
    marginBottom: 4,
    fontFamily: theme.fonts.regular
  },
  description: {
    color: theme.colors.ahg_secondary_lighten1,
    fontSize: 13,
    fontFamily: theme.fonts.regular
  }
});
