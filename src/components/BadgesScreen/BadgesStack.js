import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import BadgesLanding from '../BadgesLanding/BadgesLanding'
import Colors from '../../res/Colors'
import BadgesScreen from './BadgesScreen'
import BadgesDetails from '../BadgesDetails/BadgesDetails'

const Stack = createStackNavigator()

const BadgesStack = () =>{
    return(
        <Stack.Navigator
            screenOptions={{
                headerStyle:{
                    backgroundColor:Colors.blackPearl,
                    shadowColor:Colors.blackPearl,
                },
                headerTintColor:Colors.white,
            }}
        >
            <Stack.Screen name="Landing" component={BadgesLanding} options={{ headerShown:false}}/>
            <Stack.Screen name="Badges" component={BadgesScreen}/>
            <Stack.Screen name="BadgesDetails" component={BadgesDetails}/>
        </Stack.Navigator>
    )
}

export default BadgesStack