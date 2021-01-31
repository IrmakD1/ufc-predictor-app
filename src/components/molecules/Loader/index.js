import React from 'react'
import { View, StyleSheet, Text, ActivityIndicator } from 'react-native'

const Loader = () => {
    return (
        <View style={styles.Container}>
            <View style={styles.LoadingBar}>
                <ActivityIndicator size='large' color='#f00' />
            </View>
            <View style={styles.TextLoader}>
                <Text>Loading</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    LoadingBar: {
        marginBottom: 20
    },
    TextLoader: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    Text: {
        color: 'red',
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default Loader