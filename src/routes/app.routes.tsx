import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Groups from '@screens/Groups';
import NewGroup from '@screens/NewGroup';
import Player from '@screens/Player';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes(){
  return (
    <Navigator>
      <Screen 
        name='groups' 
        component={Groups}
      />
      
      <Screen 
        name='new' 
        component={NewGroup}
      />

      <Screen
        name='player' 
        component={Player}
      />
    </Navigator>
  )
}