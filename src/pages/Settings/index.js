import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useTranslation } from "react-i18next";
import { List, Divider, Text, Button } from 'react-native-paper';
import Header from '../../components/_common/Header';
import theme from "../../themes/default";
import { useContext } from "../../core/_root";
import {styles} from './styles'

const Settings = ({ navigation }) => {
  const { t, i18n } = useTranslation();
  const {
    state: { app },
    actions: { app: { logout } } } = useContext();

  useEffect(() => {
    if (app.jwt === null) {
      navigation.replace('Login');
    }
  }, [app.jwt])


  return (
    <View style={styles.view}>

      <Header text={t('settings.emptyView')}/>
      <List.Item
        title={t('settings.notificacion')}
        titleStyle={styles.text}
        right={() => <List.Icon color="#3A3A45DE" icon="chevron-right" />}
      />
      <Divider />
      <List.Item
        title={t('settings.help')}
        titleStyle={styles.text}
        right={() => <List.Icon color="#3A3A45DE" icon="open-in-new" />}
      />
      <Divider />
      <List.Item
        left={() => <Text style={styles.left}>Versão</Text>}
        right={() => <Text style={styles.right}>2.0</Text>}
      />
      <View style={styles.wrapper}>
        <Button labelStyle={styles.button} uppercase={false} color={theme.colors.ahg_cyan_base} icon="exit-to-app" onPress={() => logout()} >
          {t('settings.exit')}
        </Button>
      </View>
    </View>
  );
};

export default Settings;
