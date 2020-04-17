import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './routes';
import { RootProvider } from "./core";
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import theme from './themes/default';
import FlashbarHandler from './components/_common/FlashbarHandler';
import i18n from '../i18n/i18n'

const themeProvider = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: theme.colors.ahg_cyan_base,
    error: theme.colors.ahg_red_base
  },
};

const App = () => {
  return (
    <RootProvider>
      <PaperProvider theme={themeProvider}>
        <FlashbarHandler>
          <StatusBar backgroundColor={theme.colors.ahg_cyan_base} barStyle="light-content" />
          <Routes />
        </FlashbarHandler>
      </PaperProvider>
    </RootProvider>
  );
};

export default App;
