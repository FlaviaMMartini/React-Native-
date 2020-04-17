import React, { useEffect } from 'react';

import { showMessage } from "react-native-flash-message";
import theme from '../../../themes/default';
import { useContext } from '../../../core/_root';
import { View } from 'react-native';

import FlashMessage from "react-native-flash-message";

const FlashbarHandler = (props) => {
    const { state } = useContext();
  
    useEffect(() => {
      const message = state.pendencies.message
      
      if (message != null) {
        const color = state.pendencies.error ? theme.colors.ahg_error_base : theme.colors.ahg_success_base
        showMessage({
          message,
          icon: null,
          backgroundColor: color
        })
      }
      
    }, [state.pendencies.message])
    
  
    return (
      <View style={{flex: 1}}>
          {props.children}
          <FlashMessage position="top" animated={true} />
      </View>
    );
  };
  
  export default FlashbarHandler;

