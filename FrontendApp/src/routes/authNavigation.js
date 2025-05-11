import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from '../screens/RegisterScreen/login';

export default function NavigationProvider() {
     const Stack = createStackNavigator();

    return(
         <NavigationContainer>
   <Stack.Navigator>
    <Stack.Screen name="Login" component={Login} options={{ headerShown: false}} />
   </Stack.Navigator>
    </NavigationContainer>
    )
}



