import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Groups from '@screens/Groups';
import NewGroup from '@screens/NewGroup';
import Player from '@screens/Player';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes(){
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen 
        name='groups' 
        component={Groups}
      />
      
      <Screen 
        name='new' 
        component={NewGroup}
      />

      <Screen
        name='players' 
        component={Player}
      />
    </Navigator>
  )
}