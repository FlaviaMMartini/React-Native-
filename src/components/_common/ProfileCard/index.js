import React from "react";
import Card from "../Card";
import {Text, View} from "react-native";
import {styles} from "./styles";

const ProfileCard = ({...props}) => {
  const {title, descriptionStyle, description, renderInside} = props
  return (
    <View style={[styles.outsideView, {...props}]}>
      <View style={styles.outsideCard}>
        <Card>
          <Text style={styles.profileCardTitle}>{title}</Text>
          <Text style={[styles.profileCardDescription, descriptionStyle]}>{description}</Text>
          {renderInside}
        </Card>
      </View>
    </View>
  )
}
export default ProfileCard;
