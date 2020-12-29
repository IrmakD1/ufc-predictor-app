import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const FighterDetails = ({ name, fighterDetails }) => {
    return (
        <View>
            <View style={styles.textContent}>
                <Text style={styles.text}>{name}</Text>
                {fighterDetails === undefined && (
                    <View>
                        <Text>Loading...</Text>
                    </View>
                )}
                {fighterDetails !== undefined && (
                    <View style={styles.detailsContainer}>
                        <Text style={styles.textDetail}>{`Nationality: ${fighterDetails.nationality}`}</Text>
                        <Text style={styles.textDetail}>{`Fighting Out of: ${fighterDetails.fightingOutOf}`}</Text>
                        <Text style={styles.textDetail}>{`Record: W: ${fighterDetails.record.wins} D: ${fighterDetails.record.draws} L: ${fighterDetails.record.losses}`}</Text>
                    </View>
                )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: 'red',
        fontSize: 18,
        marginTop: 10,
        textAlign: 'center'
    },
    modalContent: {
        backgroundColor: 'white',
        paddingBottom: 10,
        borderRadius: 6,
    },
    textContent: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    detailsContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    textDetail: {
        fontWeight: 'bold'
    }
})

export default FighterDetails