import React from 'react';
import { View } from 'react-native';
import {useTranslation} from "react-i18next";
import Header from '../../components/_common/Header';
import { styles } from './styles';
import PendenciesList from '../../components/PendenciesList';
import { useContext } from "../../core/_root";

const Pendencies = () => {
  const { t, i18n } = useTranslation();
  const { state, actions } = useContext();

	const solveAction = (item, wasAccepted, onlyRead = false) => {
    return actions.pendencies.solvePendency(state.app.jwt, item, wasAccepted, onlyRead)
	}

  return (
    <View>
      <Header text={t('pendencies.pendencies')}/>
      <View style={styles.container}>
        <PendenciesList data={state.pendencies.list} solveAction={solveAction}/>
      </View>
    </View>
  );
};

export default Pendencies;
