import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


const Header = ({text}) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default Header