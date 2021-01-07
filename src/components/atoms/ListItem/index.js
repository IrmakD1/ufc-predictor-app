import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const ListItem = ({ text, hanldeOnPress, rank = null, colour, highlight }) => {
    if (rank !==null) {
        if ( highlight !== false ) {
            return (
                <TouchableOpacity onPress={hanldeOnPress}>
                    <View style={styles.highlightedContainer}>
                        <Text style={{...styles.text}}>{`${rank}: ` }</Text>
                        <Text style={{...styles.text, color: colour}}>{text}</Text>
                    </View>
                </TouchableOpacity>
            )
        } else {
            return (
                <TouchableOpacity onPress={hanldeOnPress}>
                    <View style={styles.textContainer}>
                        <Text style={{...styles.text}}>{`${rank}: ` }</Text>
                        <Text style={{...styles.text, color: colour}}>{text}</Text>
                    </View>
                </TouchableOpacity>
            )
        }
    } else {
        return (
            <TouchableOpacity onPress={hanldeOnPress}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{text}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    textContainer: {
        shadowOpacity: 0.26,
        elevation: 8,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    highlightedContainer: {
        shadowOpacity: 0.26,
        elevation: 8,
        backgroundColor: '#f0ebeb',
        borderRadius: 10,
        padding: 20,
        flexDirection: 'row',
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