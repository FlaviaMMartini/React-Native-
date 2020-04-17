import {StyleSheet} from "react-native";
import theme from "../../../themes/default";

export const styles = StyleSheet.create({
  avatarCircle: {
    padding: 2,
    borderWidth: 2,
    borderRadius: 36
  },
  avatarContainer: {
    padding: 8,
    justifyContent: 'center'
  },
  avatarFont: {
    fontFamily: theme.fonts.regular
  }
});
