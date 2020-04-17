import {Dimensions, StyleSheet} from 'react-native';
import theme from '../../themes/default'
const screen = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingHorizontal: 16,
    paddingBottom: 16
  },
  search: {
    marginVertical: 16,
    flexDirection: 'row',
    alignItems: 'center'
  },
  searchField: {
    flex: 1,
    fontFamily: theme.fonts.regular
  },
  radioItem: {
    fontSize: 16,
    color: theme.colors.ahg_waterloo_darken1,
    fontFamily: theme.fonts.regular
  },
  radioView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  radioGroup: {
    flex: 1
  },
  orderText: {
    fontSize: 18,
    marginTop: 24,
    color: theme.colors.ahg_waterloo_darken2,
    fontFamily: theme.fonts.semibold
  },
  list: {
    height: '85%',
    marginBottom: '18%'
  },
  filterModal: {
    justifyContent: 'flex-end',
    paddingBottom: 24,
    paddingLeft: 16,
    margin: 0,
    marginTop: screen.height-230,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'white',
  }
});
