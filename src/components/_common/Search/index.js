import React, {useEffect, useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import PropTypes from 'prop-types';
import {styles} from './styles';
import theme from '../../../themes/default';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Search = ({placeholder, searchEmployees}) => {
  const [value, setValue] = useState('');

  useEffect( () => {
    if (value != ' ' || value != '') {
      searchEmployees('')
    }
  }, [])

  return (
    <View style={styles.searchSection}>
      <Icon
        style={styles.searchIcon}
        name="search"
        size={24}
        color={theme.colors.ahg_secondary_lighten1}
      />
      <TextInput
        style={styles.input}
        inlineImageLeft="search_icon"
        placeholder={placeholder}
        onChangeText={text => {
          searchEmployees(text)
          setValue(text)
        }}
        value={value}
      />
    </View>
  );
};

Search.propTypes = {
  placeholder: PropTypes.string,
};
Search.defaultProps = {
  placeholder: 'Procurar',
};
export default Search;
