import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';

import { Card, Title, Subheading } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from './styles';

const IndicatorItem = ({ item }) => {
  return (

    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={[styles.number, { marginTop: item.syncMethod ? -8 : 0}]}>{item.number}</Title>
          <Subheading style={styles.description} numberOfLines={1} ellipsizeMode='tail' >
            {item.title}
          </Subheading>
        </Card.Content>

        {item.syncMethod ?
          <TouchableOpacity style={styles.button}>
            <Icon name="cached" size={18} color="white" />
            <Text style={styles.buttonText}>{'Sincronizar'}</Text>
          </TouchableOpacity> :
          <View style={styles.bottom}/>
        }
      </Card>

      {item.lastSync ?
        <Text style={styles.footerText}>
          Sincronizado {item.lastSync}
        </Text> :
        <View />
      }

    </View>
  );
};

export default IndicatorItem;
