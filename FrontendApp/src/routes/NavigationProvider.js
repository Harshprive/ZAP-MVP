import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/RegisterScreen/Login';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const Stack = createStackNavigator();
  
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen 
        name="Login" 
        component={Login} 
      />
    </Stack.Navigator>
    </NavigationContainer>

  );
}


