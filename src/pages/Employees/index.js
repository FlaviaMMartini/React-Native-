import React, {useState, useRef, useEffect} from 'react';
import { useTranslation } from 'react-i18next';
import { styles } from './styles';

import EmployeesList from '../../components/EmployeesList';

import { Text, View, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import {RadioButton, Searchbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useContext } from '../../core/_root';
import Header from '../../components/_common/Header';
import Modal from 'react-native-modal';

const Employees = ({navigation}) => {
  const { t, i18n } = useTranslation();
  const { state } = useContext();
  const allEmployees = state.employees.list
  const [filteredList, setFilteredList] = useState(allEmployees);
  const [query, setQuery] = useState('')
  const [sortMethod, setSortMethod] = useState('alph-asc')
  const [modalVisible, setModalVisibility] = useState(false)

  const search = (text) => {
    const filtered = allEmployees.filter(emp => emp.name.toLowerCase().includes(text.toLowerCase()))
    setQuery(text)
    setFilteredList(filtered)
  }

  const sort = (method) => {
    setSortMethod(method)
    setModalVisibility(false)
  }

  const openProfile = (employee) => {
    navigation.navigate("Profile", {employee: employee})
  }

  const renderModal = () => {
    return (
      <View>
        <Text style={styles.orderText}>Ordenar por</Text>

        <RadioButton.Group
          onValueChange={value => sort(value)}
          value={sortMethod}>
          <View style={[styles.radioView, {marginTop: 16}]}>
            <RadioButton value="alph-asc"/>
            <TouchableOpacity onPress={() => sort("alph-asc")}>
              <Text style={styles.radioItem}>Ordem alfabética (A-Z)</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.radioView}>
            <RadioButton value="alph-dsc"/>
            <TouchableOpacity onPress={() => sort("alph-dsc")}>
              <Text style={styles.radioItem}>Ordem alfabética (Z-A)</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.radioView}>
            <RadioButton value="presente"/>
            <TouchableOpacity onPress={() => sort("presente")}>
              <Text style={styles.radioItem}>Funcionários presentes</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.radioView}>
            <RadioButton value="ausente"/>
            <TouchableOpacity onPress={() => sort("ausente")}>
              <Text style={styles.radioItem}>Funcionários ausentes</Text>
            </TouchableOpacity>
          </View>
        </RadioButton.Group>
      </View>
    )
  }

  return (
    <View>
      <View>
        <Header text={"Funcionários"}/>
        <View style={styles.container}>

          <View style={styles.search}>
            <Searchbar
              style={styles.searchField}
              placeholder="Buscar por funcionário"
              onChangeText={query => { search(query) }}
              value={query}
            />
            <TouchableOpacity onPress={() => setModalVisibility(true)}>
              <Icon
                style={{ marginLeft: 10 }}
                name="filter-list"
                size={30}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.list}>
            <EmployeesList list={filteredList} sortMethod={sortMethod} openProfile={openProfile}/>
          </View>
        </View>
      </View>
      <View style={{flex: 1,}}>
        <Modal
          testID={'modal'}
          isVisible={modalVisible}
          onSwipeComplete={() => setModalVisibility(false)}
          swipeDirection={['up', 'left', 'right', 'down']}
          style={styles.filterModal}>
          {renderModal()}
        </Modal>
      </View>
    </View>
  )
};

export default Employees;
