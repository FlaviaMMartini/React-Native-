import React, {useEffect} from "react";
import {View} from 'react-native';
import {styles} from './styles';
import {useContext} from "../../core/_root";
import Logo from "../../components/_common/Logo/splash_logo.svg";

const Preload = ({navigation}) => {
    const { state: { app }, actions: { app: { resumeSession } } } = useContext();

    useEffect(() => {
        if(app.loading) {
            resumeSession()
        } else {
            if (app.jwt !== null) {
                navigation.replace('Home');
            } else {
                navigation.replace('Login');
            }
        }
    }, [app.loading])

    return (
      <View style={styles.container}>
          <Logo />
      </View>
    )
}

export default Preload
