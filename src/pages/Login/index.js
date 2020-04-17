import React, { useEffect } from "react";
import { Platform, Linking } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Container, AreaInput } from './styles';
import FormLogin from '../../components/FormLogin';
import Logo from "../../components/_common/Logo/login_logo.svg";
import { useContext } from "../../core/_root";
import { Button } from 'react-native-paper';

const Login = ({ navigation }) => {
    const { t, i18n } = useTranslation();
    const {
        state: { app },
        actions: { app: { requestLogin } } } = useContext();

    useEffect(() => {
        if (app.loading) {
            // SHOW LOADING
        } else if (app.jwt !== null) {
            navigation.replace('Home');
        }
    }, [app.loading])

    return (
        <Container behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled>
            <Logo height={90} />
            <AreaInput>
                <FormLogin navigation={navigation} submitAction={requestLogin} />
            </AreaInput>
            <Button uppercase={false} onPress={() => console.log('Pressed')}>
                {t('formLogin.acess')}
            </Button>
            <Button uppercase={false} onPress={() => Linking.openURL('https://reactnativecode.com')}>
                {t('formLogin.forgotPassword')}
            </Button>
        </Container>
    )
}

export default Login
