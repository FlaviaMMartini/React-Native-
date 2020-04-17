import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {FlatList, TouchableOpacity, View} from 'react-native';
import EmployeeItem from '../EmployeeItem';


const EmployeesList = (props) => {
  const { t, i18n } = useTranslation();

  const sort = () => {
    switch(props.sortMethod){
      case 'alph-asc':
        return props.list.sort(function(a, b){return a.name > b.name})
        break
      case 'alph-dsc':
        return props.list.sort(function(a, b){return a.name < b.name})
        break
      case 'presente':
        return props.list.sort(function(a, b){return a.image != undefined})
        break
      case 'ausente':
        return props.list.sort(function(a, b){return a.image == undefined})
        break
      default:
        return props.list
        break
    }
  }

  return (
    <View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={sort()}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity key={item.id+'TO'} onPress={() => props.openProfile(item)}>
            <EmployeeItem
              key={item.id}
              employee={item}
              description={'Ahgora Multi'}
              espelhoAberto={true}
              justificativa={true}
              ferias={true}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default EmployeesList;
