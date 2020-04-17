import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const Grid = styled.View`
  flex-direction: row;
`;
export const styles = StyleSheet.create({
  title: {
    color: '#3A3A45',
    fontSize: 16,
    maxWidth: 200,
    marginBottom: 10,
  },
  view: {
    marginTop: 20,
  },
  text: {
    color: '#9D9DAE',
    fontSize: 14,
    marginBottom: 10,
  },
  small: {
    color: '#9D9DAE',
    fontSize: 10,
    marginBottom: 1,
  },
  button: {
    color: '#1199DD',
    fontWeight: 'bold',
    paddingLeft:6,
    paddingTop:7,
    fontSize:12,
  },
  icon: {
    paddingTop:5,
  },
  grid: {
    flexDirection:"row",
  },
});
