import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { PersistGate } from 'redux-persist/integration/react';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import {
  Provider as PaperProvider,
  configureFonts,
  DefaultTheme,
} from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import { store, persistor } from './src/store';
import { colors } from './src/styles/theme.json';
import SplashScreen from './src/screens/SplashScreen';
import Routes from './src/routes';

const fontConfig = {
  default: {
    regular: {
      fontFamily: 'Inter_400Regular',
      fontWeight: 'normal'
    },
    bold: {
      fontFamily: 'Inter_700Bold',
      fontWeight: 'normal'
    }
  }
}

const theme = {
  ...DefaultTheme,
  fonts: configureFonts(fontConfig)
}

const App = () => {

  const [wait, setWait] = useState(false);
  let [fontsLoaded] = useFonts({
    Inter_400Regular, Inter_700Bold
  });

  setTimeout(() => {
    const time = setWait(true)
    clearTimeout(time)
  }, 1000);

  if (!fontsLoaded || !wait) {
    return <SplashScreen />;
  } else {
    return (
      <StoreProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={colors}>
            <PaperProvider theme={theme}>
              <Routes />
            </PaperProvider>
          </ThemeProvider>
        </PersistGate>
      </StoreProvider>
    );
  }
}

export default App

