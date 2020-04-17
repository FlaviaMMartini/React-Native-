import {Avatar} from "react-native-paper";
import {styles} from "./styles";
import {View} from "react-native";
import React from "react";
import theme from "../../../themes/default";
import endpoints from "../../../core/client/endpoints";

const RoundAvatar = ({...props}) => {
  const {employee, jwt, status, size = 36} = props
  const getImage = (image) => {
    return endpoints.GET_IMAGE + image + '?authorization=' + jwt
  }

  const getStatus = _ => {
    if (status == 'presente') {
      return theme.colors.ahg_success_base
    }
    if (status == 'intervalo') {
      return theme.colors.ahg_orange_base
    }
    return theme.colors.ahg_secondary_lighten1
  }

  const getInitials = _ => {
    const name = employee.name.toUpperCase()
    return name.charAt(0) + (name.indexOf(' ') === -1 ? name.charAt(1) : name.substr(name.indexOf(' ') + 1).charAt(0));
  }

  let avatar = <Avatar.Text size={size} labelStyle={styles.avatarFont} label={getInitials()} />
  if (employee.image) {
    avatar = <Avatar.Image size={size} source={employee.image ? { uri: getImage(employee.image) } : null} />
  }
  return (
    <View style={[styles.avatarContainer, {...props}]}>
      <View style={[styles.avatarCircle, { borderColor: getStatus() }]}>
        { avatar }
      </View>
    </View>
  )
}

export default RoundAvatar;
