import React, {FC} from 'react';
import {createStackNavigator} from "@react-navigation/stack"
import Home from '../screens/Home';
import Detail from '../screens/Detail';

const {Navigator, Screen} = createStackNavigator();


const StackNavigation:FC = () => {
    return(
        <Navigator screenOptions={{headerShown:false}}>
            <Screen 
                name="Home"
                component={Home}
            />
            <Screen 
                name="Detail"
                component={Detail}
            />
        </Navigator>
    )
}

export default StackNavigation;