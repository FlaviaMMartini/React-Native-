
import { StyleSheet } from 'react-native';
import theme from '../../../themes/default';

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingTop: 24,
        paddingBottom: 16
    },
    text: {
        color: theme.colors.ahg_waterloo_darken2,
        fontSize: 24,
        fontFamily: theme.fonts.regular
    }
});