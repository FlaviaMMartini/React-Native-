import {StyleSheet} from 'react-native';
import themes from '../../themes/default';

export const styles = StyleSheet.create({
  buttonText: {
    color: themes.colors.ahg_cyan_base,
    paddingRight: 16,
    paddingTop: 8
  },
  regularName: {
    color: themes.colors.ahg_waterloo_darken2,
    fontSize: 16,
    fontFamily: themes.fonts.regular
  },
  regularDescription: {
    color: themes.colors.ahg_waterloo_base,
    fontSize: 12,
    fontFamily: themes.fonts.semibold
  },
  innerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  outsideCard: {
    marginRight: 5,
    marginBottom: 16,
    marginLeft: 5,
  },
  outsideView: {
    paddingLeft: 8,
    paddingRight: 8,
  }
});
