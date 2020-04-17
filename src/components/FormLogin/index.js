import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Button, HelperText } from 'react-native-paper';
import { styles } from './styles';
import { useContext } from '../../core/_root';

import TextField from '../_common/TextField'

const FormLogin = ({ submitAction }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { t, i18n } = useTranslation();
  const [errors, setErrors] = useState(false);
  const { state: { app } } = useContext();
  const [buttonLoading, setButtonLoading] = useState(false);

  useEffect(() => {
    if (app.error) {
      setErrors(true)
    } else {
      setErrors(false)
    }
  }, [app.error])

  const changeButtonLoading = () => {
    setButtonLoading(true);
    setTimeout(() => {
      setButtonLoading(false);
    }, 2000);
  };

  const onButtonPressed =() => {
    changeButtonLoading();
    submitAction({ email, password })
  }

  return (
    <View>
      <TextField iconName="email" label={t('formLogin.emailLabel')} onChangeAction={setEmail} error={errors} />
      <TextField iconName="lock" label={t('formLogin.passwordLabel')} secure={true} onChangeAction={setPassword} error={errors} />
      <View style={styles.row}>
        <HelperText
          style={styles.view}
          type="error"
          visible={errors}>
          <Icon
            name="info"
            size={20}
          /></HelperText>
        <HelperText
          style={styles.text}
          type="error"
          visible={errors}>{t('formLogin.errorLabel')}</HelperText>
      </View>
      <Button loading={buttonLoading} style={styles.button} mode="contained" onPress={() => onButtonPressed()}>
        {!buttonLoading && `${t('formLogin.submit')}`}
        {buttonLoading && `${t('formLogin.submiting')}`}
      </Button>
    </View>
  );
};

export default FormLogin;
