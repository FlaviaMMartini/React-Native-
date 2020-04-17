import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import theme from '../../themes/default';

export const styles = StyleSheet.create({
  container: {
    minWidth: 220,
    marginRight: 5,
    marginLeft: 5,
    marginBottom: 20
  },
  card: {
    paddingVertical: 10
  },
  number: {
    color: theme.colors.ahg_secondary_darken2,
    fontFamily: theme.fonts.semibold,
    fontSize: 24
  },
  description: {
    color: theme.colors.ahg_secondary_base,
    fontFamily: theme.fonts.regular
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.ahg_secondary_lighten1,
    height: '34%',
    paddingLeft: 16,
    marginBottom: -12,
    marginTop: 8,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  buttonText: {
    color: theme.colors.ahg_gray_lighten5,
    paddingLeft: 3,
    fontFamily: theme.fonts.regular
  },
  footerText: {
    color: theme.colors.ahg_secondary_lighten1,
    fontSize: 10,
    marginTop: 8,
    fontFamily: theme.fonts.regular
  },
  bottom: {
    height: '34%',
    marginBottom: -12,
  },
});
