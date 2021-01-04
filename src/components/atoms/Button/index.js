import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'

const Button = ({ text, handlePress }) => {
    return(
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.button}>
                <Text style={styles.text}>{text}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        shadowOpacity: 0.26,
        elevation: 8,
        borderRadius: 10,
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
        margin: 7,
    }
})

export default Button