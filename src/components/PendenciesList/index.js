import React from 'react';
import {FlatList,View} from 'react-native';
import PendencyItem from '../PendencyItem';
import { styles } from './styles';

const PendenciesList = ({short = false, data = [], solveAction }) => {

  const shortVersion = _ => {
    return (
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data.slice(0, 5)}
          keyExtractor={item => item.id}
          renderItem={({item}) => <PendencyItem data={item} short={true} action={solveAction}/>}
        />
      </View>
    );
  }

  const completeVersion = _ => {
    return (
      <View>
        <FlatList
          style={styles.container}
          showsHorizontalScrollIndicator={false}
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => <PendencyItem data={item} action={solveAction}/>}
        />
      </View>
    );
  }

  if (short) {
    return shortVersion()
  }

  return completeVersion()
};

export default PendenciesList;
