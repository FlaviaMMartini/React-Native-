import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Card from '../_common/Card';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {styles} from './styles'
import {useTranslation} from 'react-i18next';

//TODO: vem da api
const numberInterjornadas = 4;
const numberIntrajornadas = 4;
const name = 'João Amaral';
const hour = '11h49';

const CardRecords = ({data, type}) => {
  const {t, i18n} = useTranslation();
  if (data === null) {
    return (
      <View
        style={{
          width: '95%',
          height: 50,
          marginRight: 10,
          marginLeft: 5,
          marginTop: 10,
          marginLeft: 11,
        }}>
        <Card>
          <Text>Empty</Text>
        </Card>
      </View>
    );
  }
  if (data && type === 'activity') {
    return (
      <View
        style={{
          width: '95%',
          height: 50,
          marginRight: 10,
          marginLeft: 5,
          marginTop: 10,
          marginBottom: 20,
          marginLeft: 11,
        }}>
        <Card>
          <Text>
            {`Às ${hour}, ${name} iniciou a atividade Atendimento para o cliente
            Ahgora Sistemas`}
          </Text>
        </Card>
      </View>
    );
  }
  if (data && type === 'interjonadas') {
    return (
      <View
        style={{
          width: '95%',
          height: 35,
          marginRight: 10,
          marginLeft: 5,
          marginTop: 10,
          marginBottom: 20,
          marginLeft: 11,
        }}>
        <Card>
          <Text>{`Sua equipe está com ${numberInterjornadas} interjonadas.`}</Text>
        </Card>
      </View>
    );
  }
  if (data && type === 'intrajornadas') {
    return (
      <View
        style={{
          width: '95%',
          height: 35,
          marginRight: 10,
          marginLeft: 5,
          marginTop: 10,
          marginBottom: 20,
          marginLeft: 11,
        }}>
        <Card>
          <Text>{`Sua equipe está com ${numberIntrajornadas} intrajonadas.`}</Text>
        </Card>
      </View>
    );
  }
  if (data && type === 'score') {
    return (
      <View
        style={{
          width: '95%',
          height: 50,
          marginRight: 10,
          marginLeft: 5,
          marginTop: 10,
          marginBottom: 20,
          marginLeft: 11,
        }}>
        <Card>
          <Text>{`${name} bateu ponto às ${hour}`}</Text>
          <TouchableOpacity style={styles.grid}>
            <Icon style={styles.icon} name="map" size={19} color="#1199DD" />
            <Text style={styles.button}>{t('records.location')}</Text>
          </TouchableOpacity>
        </Card>
      </View>
    );
  }
};
CardRecords.propTypes = {
  type: PropTypes.string,
};
CardRecords.defaultProps = {
  type: 'score',
};
export default CardRecords;
