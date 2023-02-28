import React from 'react';
import {CreateDrawerNavigator} from '@react-navigation/drawer'
import TabNavigator from "../navigation/TabNavigator"
import Profile from "../screens/Profile"

const Drawer =CreateDrawerNavigator();

const DrawerNavigator =() => {
    return(
        <Drawer.Navigator >
           
            <Drawer.Screen name="Profile" component ={TabNavigator} />
        </Drawer.Navigator>

    );
};

export default DrawerNavigator;