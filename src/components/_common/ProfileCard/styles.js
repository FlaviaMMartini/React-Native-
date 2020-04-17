import {StyleSheet} from 'react-native';
import themes from "../../../themes/default";

export const styles = StyleSheet.create({
  profileCardTitle: {
    color: themes.colors.ahg_waterloo_base,
    fontSize: 16,
    fontFamily: themes.fonts.regular
  },
  profileCardDescription: {
    color: themes.colors.ahg_waterloo_darken2,
    fontSize: 20,
    fontFamily: themes.fonts.semibold
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
