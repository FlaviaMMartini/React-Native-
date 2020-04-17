import Icon from "react-native-vector-icons/MaterialIcons";
import themes from "../../../themes/default";
import {Text, View} from "react-native";
import React from "react";

const IconTextRow = ({...props}) => {
  const {iconLeft, color, size, text} = props
  return(
    <View {...props}>
      <View style={{flexDirection: "row"}}>
        <Icon name={iconLeft} size={size} color={color} />
        <Text style={{paddingLeft: 8, fontSize: size, color: color}}>{text}</Text>
      </View>
    </View>
  )
}

export default IconTextRow
