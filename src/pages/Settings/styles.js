import { StyleSheet } from "react-native";
import theme from "../../themes/default";

export const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FFFFFF',
    color: theme.colors.ahg_waterloo_darken1,
  },
  view: {
    position: "relative",
    height: 150
  },
  content: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  container: {
    backgroundColor: theme.colors.ahg_cyan_base,
    fontFamily: theme.fonts.regular
  },
  text: {
    fontFamily: theme.fonts.regular,
    fontSize: 17
  },
  button: {
    fontFamily: theme.fonts.regular,
    fontSize: 15
  },
  left: {
    color: "#78788FDE",
    paddingTop: "2%",
    paddingLeft: "2%",
    fontFamily: theme.fonts.regular,
    fontSize: 18
  },
  right: {
    color: "#78788FDE",
    marginRight: "5%",
    paddingTop: "2%",
    fontSize: 18,
    fontFamily: theme.fonts.regular
  },
  wrapper: {
    marginTop: '70%',
    width: '100%',
    paddingRight: "20%",
    paddingLeft: "20%",
    justifyContent: 'flex-end',
    bottom: 30
  }
});