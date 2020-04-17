
import React, { useState } from 'react';
import { styles } from './styles';
import { View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import theme from '../../../themes/default';

const TextField = ({ iconName, label, onChangeAction, secure, error }) => {
    const [text, setText] = useState('');
    const [color, setColor] = useState(theme.colors.ahg_secondary_lighten1)
    const [isVisible, setVisibility] = useState(secure)

    const onChangeText = text => {
        setText(text)
        onChangeAction(text)
    }

    const changeColor = (focus) => {
        if (focus) {
            return setColor(theme.colors.ahg_cyan_base)
        }
        return setColor(theme.colors.ahg_secondary_lighten1)
    }

    const changeSecureVisibility = () => {
        if (isVisible == true) {
            return setVisibility(false);
        }
        setVisibility(true);
    };

    return (
        <View style={styles.rowContainer}>
            <Icon
                name={iconName}
                size={24}
                color={color}
            />
            <TextInput
                error={error}
                style={styles.input}
                label={label}
                value={text}
                secureTextEntry={isVisible}
                autoCapitalize='none'
                onFocus={() => changeColor(true)}
                onBlur={() => changeColor(false)}
                onChangeText={typed => onChangeText(typed)}
            />
            {secure ?
                <TouchableOpacity style={styles.icon} onPress={() => changeSecureVisibility()}>
                    <Icon
                        name={isVisible ? "visibility" : "visibility-off"}
                        size={24}
                        color={color}
                        style={styles.marginTop}
                    />
                </TouchableOpacity>
                :
                <View />
            }
        </View>
    );
};

export default TextField;
