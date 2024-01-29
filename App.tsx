import React from 'react';
import { ActivityIndicator, StyleSheet, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'; // Import SafeAreaView from 'react-native-safe-area-context'
import { ThemeProvider } from 'styled-components';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import theme from '@theme/index';
import Groups from '@screens/Groups';
import NewGroup from '@screens/NewGroup';
import Player from '@screens/Player';

// If you are using StatusBar from 'react-native', keep this import.
import { StatusBar } from 'react-native'; 

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <SafeAreaView style={globalStyles(theme).container}>
      <ThemeProvider theme={theme}>
        <StatusBar 
          barStyle="light-content"
          backgroundColor={theme.COLORS.GRAY_700}
        />
        {fontsLoaded 
          ? <Player /> 
          : <ActivityIndicator size="large" /> // Optionally specify size
        }
      </ThemeProvider>
    </SafeAreaView>
  );
}

const globalStyles = (theme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.GRAY_700,
    paddingTop: Platform.OS === 'android' ? 8 : 0,
    paddingHorizontal: 16
  },
});
