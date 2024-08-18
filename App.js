import * as React from 'react';
import { View, Text, Button, Image, TouchableOpacity, TouchableOpacityBase } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import ShopPage from './ShopPage';
import BagPage from './BagPage';
import FavoritePage from './FavoritePage';
import ProfilePage from './ProfilePage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeAktif from './assets/icon/home-activated.png';
import HomeInaktif from './assets/icon/home-inactive.png';
import ShopAktif from './assets/icon/shop-activated.png';
import ShopInaktif from './assets/icon/shop-inactive.png';
import BagAktif from './assets/icon/bag-activated.png';
import BagInaktif from './assets/icon/bag-inactive.png';
import FavoriteAktif from './assets/icon/favorites-activated.png';
import FavoriteInaktif from './assets/icon/favorites-inactive.png';
import ProfileAktif from './assets/icon/profil-activated.png';
import ProfileInaktif from './assets/icon/profil-inactive.png';

const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          headerShown: false, tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? HomeAktif : HomeInaktif}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={ShopPage}
        options={{
          headerShown: false, tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? ShopAktif : ShopInaktif}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Bag"
        component={BagPage}
        options={{
          headerShown: false, tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? BagAktif : BagInaktif}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoritePage}
        options={{
          headerShown: false, tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? FavoriteAktif : FavoriteInaktif}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfilePage}
        options={{
          headerShown: false, tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? ProfileAktif : ProfileInaktif}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MyTabs} options={{headerShown: false}} />
        <Stack.Screen name="Login" component={LoginPage} options={{headerShown: false}} />
        <Stack.Screen name="Shop" component={ShopPage} options={{headerShown: false}} />
        <Stack.Screen name="Bag" component={BagPage} options={{headerShown: false}} />
        <Stack.Screen name="Favorite" component={FavoritePage} options={{headerShown: false}} />
        <Stack.Screen name="Profile" component={ProfilePage} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;