import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const FighterCard = ({ name, weightclass }) => {
    return (
        <View style={styles.textContainer}>
            <Text style={styles.nameText}>{name}</Text>
            <Text style={styles.weightText}>{weightclass}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    weightText: {
        color: 'red',
        fontSize: 12,
    },
    nameText: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 20,
        textAlign: 'center'
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: 100,
    }
})

export default FighterCard