import React from 'react';
import {Alert} from 'react-native';
import {useTranslation} from 'react-i18next';

const AlertSync = () => {
  const {t, i18n} = useTranslation();
  Alert.alert(
    `${t('AlertSync.title')}`,
    `${t('AlertSync.msg')}`,
    [
      {
        text: `${t('AlertRefuse.cancel')}`,
        onPress: () => console.log('cancelado'),
        style: 'cancel',
      },
      {
        text: `${t('AlertSync.sync')}`,
        onPress: () => console.log('Aprovado'),
      },
    ],
    {cancelable: true},
  );
};
export default AlertSync;
