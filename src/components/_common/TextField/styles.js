import { StyleSheet } from 'react-native';
import theme from '../../../themes/default';

export const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        flex: 1,
        backgroundColor: 'transparent',
        marginHorizontal: 8,
        fontFamily: theme.fonts.regular
    },
});
