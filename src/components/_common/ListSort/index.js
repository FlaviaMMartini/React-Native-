import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import theme from '../../themes/default';
import { RadioButton, Text } from 'react-native-paper';

const ListSort = () => {
  const [value, setValue] = useState('ascendente');

  return (
    <View>
      <RadioButton.Group
        value={value}
      >
        <View>
          <Text>Ordenar de A-Z</Text>
          <RadioButton value="ascendente" />
        </View>
        <View>
          <Text>Ordenar de Z-A</Text>
          <RadioButton value="descendente" />
        </View>
      </RadioButton.Group>
    </View>
  );
};

export default ListSort;
