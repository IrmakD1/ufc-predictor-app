import React from 'react'
import { View, StyleSheet } from 'react-native'

import { Card } from '../components/atoms'
import CalendarIcon from '../assets/icons/calendar.png'
import FistIcon from '../assets/icons/fist.png'
import Styles from '../assets/constants/styles'


const Home = ({navigation}) => {
    return (
        <View style={styles.screen}>
            <Card text='Choose Event' img={CalendarIcon} navigation={navigation} route='Calendar' />
            <Card text='Choose Fighter' img={FistIcon} navigation={navigation}  route='Predict' />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: Styles.screen
})

export default Home