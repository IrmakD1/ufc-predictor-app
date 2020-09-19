import React from 'react'
import { createStackNavigator } from '@react-navigation/stack' 
import { NavigationContainer } from '@react-navigation/native'

import { Home, Predict, Events} from './screens'
import { Header } from './components/atoms'


const Stack = createStackNavigator()

const Router = ({}) => {
    return (
        <NavigationContainer>
            <Header text='UFC Fight Predictor'/>
            <Stack.Navigator 
                initialRouteName='Home'
                screenOptions={{
                    header: () => null 
                }}>
                <Stack.Screen name='Home' component={Home}/>
                <Stack.Screen name='Predict' component={Predict}/>
                <Stack.Screen name='Events' component={Events}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router