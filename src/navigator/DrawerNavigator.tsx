import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {HomeScreen} from '@/screens/HomeScreen';
import {ParamsList} from './types/ParamsList';

const Drawer = createDrawerNavigator<ParamsList>();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
};

export {DrawerNavigator};
