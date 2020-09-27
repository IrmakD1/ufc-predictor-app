import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Styles from '../assets/constants/styles'


const Event = () => {
    return (
        <View style={styles.screen}>
            <Text>Choose your Event to Begin!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: Styles.screen
})

export default Event