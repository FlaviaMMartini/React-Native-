import styled from 'styled-components/native';
import {StyleSheet, Dimensions} from 'react-native';
import theme from '../../themes/default';

export const defaultStyles = StyleSheet.create({
  container: {
    marginVertical: 8,
    padding: 16
  },
  title: {
    fontSize: 16,
    color: theme.colors.ahg_secondary_darken2,
    fontFamily: theme.fonts.regular,
    flexWrap: 'wrap',
    marginBottom: 10
  },
  description: {
    fontSize: 14,
    color: theme.colors.ahg_secondary_lighten1,
    fontFamily: theme.fonts.regular,
    flexWrap: 'wrap',
    marginBottom: 10
  },
  attachment: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  button: {
    color: theme.colors.ahg_primary_base,
    fontSize: 14,
    fontFamily: theme.fonts.semibold,
    marginLeft: 8
  },
  footer: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between'
  },
  footerText: {
    color: theme.colors.ahg_secondary_lighten1,
    fontSize: 10,
    marginTop: 8,
    fontFamily: theme.fonts.regular
  },
  actions: {
    flexDirection: 'row'
  },
  actionButton: {
    marginLeft: 16
  }
});

export const shortStyles = StyleSheet.create({
  ...defaultStyles,
  container: {
    marginBottom: 16,
    marginHorizontal: 12,
    padding: 12,
    width: Dimensions.get('window').width - 80,
  },
});


