import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

const Header = ({text}) => {
    return (
        <View style={styles.container}> 
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}


export default Header;