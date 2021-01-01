import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const ListItem = ({ text, hanldeOnPress }) => {
    return (
        <TouchableOpacity onPress={hanldeOnPress}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    textContainer: {
        shadowOpacity: 0.26,
        elevation: 8,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    text: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
    }
})

export default ListItem