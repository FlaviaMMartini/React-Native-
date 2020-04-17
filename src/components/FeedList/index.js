import React, {useState, useEffect} from 'react';
import {FlatList, View, Text} from 'react-native';
import CardRecords from '../CardRecords';
import axios from 'axios';
import {Title} from './styles'

//TODO: vem da api
const title = 'ÚLTIMOS REGISTROS';

const FeedList = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await axios(
        `https://www.googleapis.com/books/v1/volumes?q=harry potter`,
      );
      setData(
        response.data.items.map(item => {
          return {
            id: item.id ? item.id : 'id vazio',
            titlePendency: 'Inclusão de batida Ana Aparecida de Jesus',
            hourPendency: '10:45',
            datePendency: '25/10/2019',
            reasonPendency: 'esqueci de bater meu ponto na chegada.',
            dateRequest: '10/12/2019',
            hourRequest: '15:00',
          };
        }),
      );
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <View>
      <Title>{title}</Title>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => <CardRecords data={item} />}
      />
    </View>
  );
};

export default FeedList;
