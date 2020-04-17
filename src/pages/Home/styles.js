import {StyleSheet} from 'react-native';
import themes from '../../themes/default';

export const styles = StyleSheet.create({
  buttonText: {
    color: themes.colors.ahg_cyan_base,
    paddingRight: 16,
    paddingTop: 8
  },
  innerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
});