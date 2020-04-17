import React from 'react';
import { View, TouchableOpacity, Text, Alert } from 'react-native';
import { defaultStyles, shortStyles } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { Card, Divider } from 'react-native-paper';
import theme from '../../themes/default';

const PendencyItem = ({ data, short, action }) => {
  const { t } = useTranslation();
  const styles = short ? shortStyles : defaultStyles

  let typeText = t('PendencyItem.generic_title')
  let actionButtons = <View/>

  const confirmAction = (wasAccepted, onlyReading = false) => {
    let title = wasAccepted ? t('PendencyItem.approve_title') : t('PendencyItem.disapprove_title')
    let message = wasAccepted ? t('PendencyItem.approve_message') : t('PendencyItem.disapprove_message') 

    switch (data.type) {
      case 'addPunch':
        message += t('PendencyItem.add_punch_confirms')
        break;

        case 'abono':
          message += t('PendencyItem.abono_confirms')
          break;
    
      default:
        title = t('PendencyItem.read_title')
        message = t('PendencyItem.read_message')
        break;
    }

    Alert.alert(
      title,
      message,
      [
        {text: title, onPress: () => action(data, wasAccepted, onlyReading)},
        {text: t('PendencyItem.cancel'), style: 'cancel'},
      ],
      { cancelable: false }
    )
  }

  const oneActionButton = _ => {
    return (
      <View style={styles.actions}>
          <TouchableOpacity style={styles.actionButton} onPress={() => confirmAction(true, true)}>
            <Text style={styles.button}>{t('PendencyItem.got_it')}</Text>
          </TouchableOpacity>
        </View>
    )
  }

  const twoActionsButtons = _ => {
    return (
      <View style={styles.actions}>
          <TouchableOpacity style={styles.actionButton} onPress={() => confirmAction(false)}>
            <Icon name="cancel" size={27} color={theme.colors.ahg_red_base} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={() => confirmAction(true)}>
            <Icon name="check-circle" size={27} color={theme.colors.ahg_green_base} />
          </TouchableOpacity>
        </View>
    )
  }

  switch (data.type) {
    case 'addPunch':
      typeText = t('PendencyItem.add_punch_title')
      actionButtons = twoActionsButtons()
      break;

    case 'abono':
      typeText = t('PendencyItem.abono_title')
      actionButtons = twoActionsButtons()
      break;

    case 'text':
      typeText = t('PendencyItem.message_title')
      actionButtons = oneActionButton()
      break;
  
    default: break;
  }

  return (
    <Card style={styles.container}>

      <View>
        <Text style={styles.title} numberOfLines={2} ellipsizeMode='tail'>
          {typeText + data.employeeName}
        </Text>
        <Text style={styles.description} numberOfLines={1} ellipsizeMode='tail'>
          {data.punch != '' ? `Às ${data.punch} do dia ${data.date}` : data.date}
        </Text>
        <Text style={styles.description} numberOfLines={short ? 3 : 6} ellipsizeMode='tail'>
          {data.reason}
        </Text>
      </View>


      <TouchableOpacity style={styles.attachment}>
        <Icon name="attachment" size={24} color={theme.colors.ahg_primary_base} />
        <Text style={styles.button}>{t('PendencyItem.attachment')}</Text>
      </TouchableOpacity>

      <Divider />


      <View style={styles.footer}>
        <Text style={styles.footerText}>
          {`${t('PendencyItem.requested')}: ${data.createdAt}`}
        </Text>

        { actionButtons }

      </View>


    </Card>
  );
};

PendencyItem.propTypes = {
  anexo: PropTypes.bool,
  pathAnexo: PropTypes.string,
};
PendencyItem.defaultProps = {
  anexo: true,
};

export default PendencyItem;
