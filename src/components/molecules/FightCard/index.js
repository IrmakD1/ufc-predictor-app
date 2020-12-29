import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import { FighterCard } from '../../atoms'

const FightCard = ({ nameOne, weightclass, nameTwo, fighters, handleOnPress }) => {

    return (
        <TouchableOpacity onPress={() => handleOnPress(fighters)}>
            <View style={styles.cardContainer}>
                <FighterCard name={nameOne} weightclass={weightclass}/>
                <View>
                    <Text style={styles.vsText}>{'VS'}</Text>
                </View>
                <FighterCard name={nameTwo} weightclass={weightclass}/>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        width: '95%',
        height: 150,
        shadowOpacity: 0.26,
        elevation: 8,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10
    },
    vsText: {
        fontWeight: 'bold',
        fontSize: 25,
    }
})

export default FightCard