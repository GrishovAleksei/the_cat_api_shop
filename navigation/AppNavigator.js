import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import FavouritesScreen from '../screens/FavouritesScreen'
import BreedScreen from '../screens/BreedScreen'
import Colors from '../constants/colors'
import Home from '../assets/icons/home.svg'
import Favourite from '../assets/icons/favourite.svg'
import Circle from '../components/UI/Circle'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

function TabsNavigator() {
  return (
    <Tab.Navigator
      style={{ marginLeft: 10, marginRight: 10 }}
      tabBarOptions={{
        showLabel: false,
        style: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: Colors.subPrimary,
          height: '13%',
          position: 'absolute',
        },
      }}
      screenOptions={({ route }) => ({ tabBarIcon: ({ focused }) => iconStyle(route, focused) })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        name="Favourite"
        component={FavouritesScreen}
      />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name="HomeScreen"
        component={TabsNavigator}
      />
      <Stack.Screen
        name="BreedScreen"
        component={BreedScreen}
      />
    </Stack.Navigator>
  );
}

const iconStyle = (route, focused) => {
  const fillIconHandler = focused ? Colors.primary : '#BDBDBD';
  
  const iconHadler = (route) => {
    switch (route.name) {
      case 'Favourite':
        return <Favourite width={20} height={20} fill={fillIconHandler} />
      default:
        return <Home width={16} height={16} fill={fillIconHandler} />
    }
  }
  
  return (
    <Circle focused={focused} >
      {iconHadler(route)}
    </Circle>
  )
};
