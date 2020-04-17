import React, { useEffect, useState } from 'react';
import { useContext } from "../../core/_root";
import IndicatorsList from '../../components/IndicatorsList';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import Title from '../../components/_common/Title';
import { useTranslation } from 'react-i18next';
import { styles } from './styles';
import PendenciesList from '../../components/PendenciesList';
import FeedList from '../../components/FeedList';

const Home = () => {
  const { state, actions } = useContext();
  const { t, i18n } = useTranslation();
  const pendenciesList = state.pendencies.list
  const employeesList = state.employees.list

  const data = [
    { number: pendenciesList.length, title: t('feed.pendencies') },
    { number: employeesList.length, title: t('feed.employeesPresent') },
    { number: '+350h', title: t('feed.bankOfHours'), lastSync: '12/02/2019 às 15h00', syncMethod: () => { console.log('sync') } },
    { number: '3h', title: t('feed.extraHours'), lastSync: '12/02/2019 às 15h00', syncMethod: () => { console.log('sync') } },
  ]

  const solveAction = (item, wasAccepted, onlyRead = false) => {
    return actions.pendencies.solvePendency(state.app.jwt, item, wasAccepted, onlyRead)
  }

  useEffect(() => {
    actions.employees.getEmployees(state.app.jwt)
    actions.pendencies.getPendencies(state.app.jwt)
  }, [])

  return (
    <View style={{ paddingTop: Platform.OS === 'ios' ? 24 : 0 }}>
      <Title text={t('feed.indicators')} />
      <ScrollView showsHorizontalScrollIndicator={false}>

        <IndicatorsList data={data} />

        {pendenciesList.length > 0 ?
          <View style={styles.innerTitle}>
            <Title text={t('feed.pendencies') + ` (${pendenciesList.length})`} />
            <TouchableOpacity style={styles.buttonView}>
              <Text style={styles.buttonText}>{t('feed.viewAll')}</Text>
            </TouchableOpacity>
          </View>
          :
          <View />}

        <PendenciesList short={true} data={pendenciesList} solveAction={solveAction} />

        <FeedList />

      </ScrollView>
    </View>

  );
};

export default Home;
