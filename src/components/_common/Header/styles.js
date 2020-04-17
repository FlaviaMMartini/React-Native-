import { StyleSheet, Platform } from 'react-native';
import theme from '../../../themes/default';

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingTop: Platform.OS === 'ios' ? 48 : 24,
        paddingBottom: 16,
        backgroundColor: 'white'
    },
    text: {
        color: theme.colors.ahg_secondary_darken1,
        fontSize: 24,
        fontFamily: theme.fonts.semibold
    }
});