import React from 'react';
import PropTypes from 'prop-types';

import { useContext } from "../../core/_root";
import endpoints from '../../core/client/endpoints';
import theme from '../../themes/default';
import { useTranslation } from 'react-i18next';

import { Avatar, Card, List } from 'react-native-paper';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from './styles';
import RoundAvatar from "../_common/RoundAvatar";

const EmployeeItem = ({
  employee,
  description,
  status,
  ferias,
  espelhoAberto,
  justificativa,
}) => {
  const {t, i18n} = useTranslation();
  const { state: {app: {jwt}}} = useContext()

  const getLabels = _ => {
    return <View style={{margin: 8, flexDirection: 'row'}}>
      {ferias && (
            <Icon
              name="beach-access"
              size={18}
              color={theme.colors.ahg_orange_lighten1}
            />
          )}
          {justificativa && (
            <Icon
              name="chat-bubble"
              size={18}
              color={theme.colors.ahg_orange_lighten1}
            />
          )}
          {espelhoAberto && (
            <Icon
              name="date-range"
              size={18}
              color={theme.colors.ahg_orange_lighten1}
            />
          )}
    </View>
  }

  const getSubtitle = _ => {
    let subtitle = ''

    switch (status) {
      case 1:
        subtitle = "Não está em seu posto de trabalho.\n"
        break;

      case 2:
      case 3:
        subtitle = "Está em seu posto de trabalho.\n"
        break;

      default:
        break;
    }

    if (description != '') {
      description = 'Trabalhando em ' + description
    }

    return subtitle + description
  }

  return (
    <View
      style={{
        marginTop: 8
      }}>
        <Card>
          <List.Item
            title={employee.name}
            titleStyle={styles.title}
            description={getSubtitle()}
            descriptionStyle={styles.description}
            left={() => RoundAvatar({employee, jwt, status})}
            right={() => getLabels()}
          />
        </Card>
      </View>
  )
};

EmployeeItem.propTypes = {
  employee: PropTypes.object,
  status: PropTypes.number, //0 = ausente, 1 = presente, 2 = intervalo, 3 = sem escala, 4 = afastado
  description: PropTypes.string,
  espelhoAberto: PropTypes.bool,
  justificativa: PropTypes.bool,
  ferias: PropTypes.bool,
};
EmployeeItem.defaultProps = {
  image: null,
  name: 'Sem Nome',
  description: '',
  status: 1,
  espelhoAberto: true,
  justificativa: true,
  ferias: true,
};

export default EmployeeItem;
