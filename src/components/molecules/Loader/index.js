import React from 'react'
import { View, StyleSheet } from 'react-native'
import { TextLoader, CirclesLoader } from 'react-native-indicator';

const Loader = () => {
    return (
        <View style={styles.Container}>
            <View style={styles.LoadingBar}>
                <CirclesLoader size={80} dotRadius={15} color='#f00'/>
            </View>
            <View style={styles.TextLoader}>
            <TextLoader text="Calculating" textStyle={styles.Text}/>
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
        marginTop: 20,
        marginLeft: 10
    },
    Text: {
        color: 'red',
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default Loader