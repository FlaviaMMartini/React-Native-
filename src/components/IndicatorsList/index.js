import React from 'react';
import { FlatList, ScrollView } from 'react-native';
import IndicatorItem from '../IndicatorItem';
import { styles } from './styles';
import { useTranslation } from 'react-i18next';

const IndicatorsList = ({data}) => {
  const { t, i18n } = useTranslation();

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>      
      <FlatList
        horizontal
        style={styles.container}
        maxToRenderPerBatch={5}
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => <IndicatorItem item={item} />}
      />
    </ScrollView>
  );
};

export default IndicatorsList;
