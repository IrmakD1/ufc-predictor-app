import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack' 
import { NavigationContainer } from '@react-navigation/native'

import { connect } from 'react-redux';

import { Home, Predict, Event, Calendar, Weights, Fighters } from './screens'
import { Header } from './components/atoms'
import * as eventActions from './actions/events';

const Stack = createStackNavigator()

class Router extends Component {


    componentDidMount() {
        const { handleAddEvents } = this.props

        handleAddEvents()
    }

    render() {

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
                    <Stack.Screen name='Event' component={Event}/>
                    <Stack.Screen name='Calendar' component={Calendar}/>
                    <Stack.Screen name='Weights' component={Weights}/>
                    <Stack.Screen name='Fighters' component={Fighters}/>
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

const mapStateToProps = (state) => ({
    //not needed anymore
    events: state.eventsList
})

export default connect(mapStateToProps, eventActions)(Router)