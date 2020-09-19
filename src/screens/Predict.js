import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

import Styles from '../assets/constants/styles'


const Predict = () => {
    return (
        <View style={styles.screen}>
            <Text>Choose your fighters to begin!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: Styles.screen
})

export default Predict