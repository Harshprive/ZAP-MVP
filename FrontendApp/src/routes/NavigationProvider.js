import { createStackNavigator } from '@react-navigation/stack';

import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import SplashScreen from '../screens/RegisterScreen/SplashScreen';
import Login from '../screens/RegisterScreen/Login';


export default function App() {
  const Stack = createStackNavigator();
  
  return (

    <>
   
     <StatusBar barStyle="dark-content" backgroundColor="#f8f8f8" />

    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen 
        name="Splash" 
        component={SplashScreen} 
        options={{ headerShown: false }}/>
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={{ headerShown: false }}/>
      
    </Stack.Navigator>
    </NavigationContainer>
</>
  );
}


