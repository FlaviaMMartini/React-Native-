import React, { useEffect, useState } from 'react';
import { useContext } from "../../core/_root";
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import Title from '../../components/_common/Title';
import { useTranslation } from 'react-i18next';
import { styles } from './styles';
import PendenciesList from '../../components/PendenciesList';
import ProfileCard from "../../components/_common/ProfileCard";
import themes from "../../themes/default";
import IconTextRow from "../../components/_common/IconTextRow";
import Card from "../../components/_common/Card";
import RoundAvatar from "../../components/_common/RoundAvatar";

const Profile = ({ navigation, route }) => {
  const { state, actions } = useContext();
  const { employee } = route.params;
  const { t } = useTranslation();
  const pendenciesList = state.pendencies.profileList
  const list = state.pendencies.list
  const { state: { app: { jwt } } } = useContext()

  const solveAction = (item, wasAccepted, onlyRead = false) => {
    return actions.pendencies.solvePendency(state.app.jwt, item, wasAccepted, onlyRead)
  }

  useEffect(() => {
    actions.pendencies.getPendenciesFromId(employee.id)
    navigation.setOptions({ title: employee.name })
  }, [list])

  const TimesheetInfo = () => {
    return (
      <View style={{ paddingTop: 8 }}>
        <IconTextRow iconLeft={"business"} size={14} color={themes.colors.ahg_waterloo_lighten1} text={"Cliente: Ahgora Sistemas"} />
        <IconTextRow iconLeft={"assignment"} size={14} color={themes.colors.ahg_waterloo_lighten1} text={"Projeto"} />
        <IconTextRow iconLeft={"local-offer"} size={14} color={themes.colors.ahg_waterloo_lighten1} text={"Tags: Bug"} />
        <IconTextRow iconLeft={"attach-money"} size={14} color={themes.colors.ahg_waterloo_lighten1} text={"Faturável"} />
        <IconTextRow iconLeft={"access-time"} size={14} color={themes.colors.ahg_waterloo_lighten1} text={"Início às 12:08"} />
      </View>
    )
  }

  return (
    <View style={{ paddingTop: Platform.OS === 'ios' ? 24 : 0 }}>
      <ScrollView showsHorizontalScrollIndicator={false}>

        {pendenciesList.length > 0 ?
          <View style={styles.innerTitle}>
            <Title text={t('feed.pendencies') + ` (${pendenciesList.length})`} />
            <TouchableOpacity style={styles.buttonView}>
              <Text style={styles.buttonText}>{t('feed.viewAll')}</Text>
            </TouchableOpacity>
          </View>
          : <View />
        }

        <PendenciesList short={true} data={pendenciesList} solveAction={solveAction} />

        <ProfileCard title={"Última batida às"} description={"11:30"} />
        <ProfileCard title={"Banco de horas"} description={"+5h"} descriptionStyle={{ color: themes.colors.ahg_green_base }} />
        <ProfileCard title={"Escala hoje"} description={"23:30 - 00:30 - 00:40 - 02:40 - 03:00 - 04:40 - 04:50 - 05:50"} />
        <ProfileCard
          title={"Trabalhando em"}
          description={"DSW 2802"}
          renderInside={<TimesheetInfo />}
        />

        <View style={styles.outsideView}>
          <View style={styles.outsideCard}>
            <Card>
              <View style={{ alignItems: 'center' }}>
                <RoundAvatar employee={employee} jwt={jwt} status={0} size={48} />
                <Text style={styles.regularName}>{employee.name}</Text>
                <Text style={styles.regularDescription}>{employee.id}</Text>
                <Text style={styles.regularDescription}>{employee.matricula}</Text>
              </View>
            </Card>
          </View>
        </View>
      </ScrollView>
    </View>

  );
};

export default Profile;
