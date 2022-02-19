/* Fundamentals */
import { Dimensions } from 'react-native';
import React, { useState, useEffect } from 'react';
/* Externals */
//import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; // For Tab Navigator Icons
/* Screens */
import MenuScreen from './MenuScreen';
import DataScreen from './DataScreen';
import HomeScreen from './HomeScreen';

export default function LayoutScreen(props) {

  const params = props?.route?.params; // Navigator Params From Parent
  const navigation = props?.navigation; // Navigation Instance From Parent

  const { width, height } = Dimensions.get('window'); // Get Screen Width and Height
  const { scale, verticalScale, moderateScale } = props?.scales; // scale Methods From Parent

  const Tab = createBottomTabNavigator(); // Creating Tab Screen Navigator

  const [outerParams, setOuterParams] = useState(null);

  useEffect(() => {
    if (params?.fullName) {
      setOuterParams(prev => ({ ...prev, fullName: params.fullName }));
    }
  }, [params.fullName])

  return (
    <Tab.Navigator initialRouteName='Home'>
      <Tab.Screen
        name="Home"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      >
        {props => <HomeScreen {...props} outerParams={outerParams} scales={{ scale, verticalScale, moderateScale }}></HomeScreen>}
      </Tab.Screen>
      <Tab.Screen
        name="Menu"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="menu" color={color} size={size} />
          ),
        }}
      >
        {props => <MenuScreen {...props} scales={{ scale, verticalScale, moderateScale }}></MenuScreen>}
      </Tab.Screen>
      <Tab.Screen
        name="Data"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="code-json" color={color} size={size} />
          )
        }}
      >
        {props => <DataScreen {...props} scales={{ scale, verticalScale, moderateScale }}></DataScreen>}
      </Tab.Screen>
    </Tab.Navigator>
  );
}