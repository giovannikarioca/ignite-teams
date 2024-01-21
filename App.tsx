import { ActivityIndicator } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import theme from '@theme/index';

// import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import Groups from '@screens/Groups';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold});

  return

  return (
    <ThemeProvider theme={theme}>
      { fontsLoaded 
        ? <Groups /> 
        : <ActivityIndicator/>
      }
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
