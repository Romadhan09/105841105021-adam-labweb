// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './LoginPage';
import SingUpPage from './SingUpPage';
import ForgetPasswordPage from './ForgetPasswordPage'; 

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Pergi ke Sing Up" onPress={() =>navigation.navigate('SingUpPage')}/>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="SingUpPage" component={SingUpPage} />
        <Stack.Screen name="ForgetPasswordPage" component={ForgetPasswordPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;