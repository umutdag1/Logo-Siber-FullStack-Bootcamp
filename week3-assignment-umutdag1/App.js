/* Fundamentals */
// import { StatusBar } from 'expo-status-bar';
import { Dimensions,LogBox  } from 'react-native';
import React from 'react';
/* Externals */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
/* Screens*/
import MainScreen from './src/screens/MainScreen';
import LoginScreen from './src/screens/LoginScreen';
import LayoutScreen from './src/screens/LayoutScreen';

// https://github.com/oblador/react-native-vector-icons/blob/master/glyphmaps/MaterialCommunityIcons.json --> Icons

export default function App() {

  LogBox.ignoreAllLogs(); // Ignore such stupid logs

  const { width, height } = Dimensions.get('window'); // Get Screen Width and Height

  // For Responsive Screen
  /******************************************************/
  //Guideline sizes are based on standard ~5" screen mobile device
  const guidelineBaseWidth = 350;
  const guidelineBaseHeight = 680;

  const scale = (size, screenWidth = width) => screenWidth / guidelineBaseWidth * size;
  const verticalScale = (size, screenHeight = height) => screenHeight / guidelineBaseHeight * size;
  const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;
   /******************************************************/
  
  const Stack = createNativeStackNavigator(); // Creating Stack Screen Navigator

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Main'>
        <Stack.Screen
          name="Main"
          options={{
            headerShown: false,
          }}
        >
          {props => <MainScreen {...props} scales={{ scale, verticalScale, moderateScale }}></MainScreen>}
        </Stack.Screen>
        <Stack.Screen
          name="Login"
          options={{
            headerShown: false,
          }}
        >
          {props => <LoginScreen {...props} scales={{ scale, verticalScale, moderateScale }}></LoginScreen>}
        </Stack.Screen>
        <Stack.Screen
          name="Layout"
          options={{
            headerShown: false,
          }}
        >
          {props => <LayoutScreen {...props} scales={{ scale, verticalScale, moderateScale }}></LayoutScreen>}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
