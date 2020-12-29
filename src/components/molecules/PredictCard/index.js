import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

import { ButtonGroup } from '../../molecules'
import WreathLeftIcon from '../../../assets/icons/wreath-left.png'
import WreathRightIcon from '../../../assets/icons/wreath-right.png'

const PredictCard = ({ winner, loser, handlePredict, handleHome }) => {
    return (
        <View>
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.winnerTitle}>Winner</Text>
                </View>
                <View style={styles.winnerContainer}>
                    <Image source={WreathLeftIcon} style={styles.image}/>
                    <View style={styles.textContainer}>
                        <Text style={styles.winnerText}>{winner.name}</Text>
                    </View>
                    <Image source={WreathRightIcon} style={styles.image}/>
                </View>
            </View>
            <View style={styles.loserContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.loserTitle}>Loser</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.loserText}>{loser.name}</Text>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <ButtonGroup 
                text1='Predict New'
                handlePress1={handlePredict}
                text2='Home'
                handlePress2={handleHome}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 6,
        paddingBottom: 30
    },
    titleContainer: {
        margin: 10
    },
    winnerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    loserContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingBottom: 10,
        borderRadius: 6,
        marginTop: 20,
        paddingBottom: 20
    },
    buttonContainer: {
        marginTop: 20
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 220,
    },
    winnerTitle: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 4
    },
    image: {
        width: 80,
        height: 80,
        marginBottom: 2,
    },
    winnerText: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center'
    },
    winnerTitle: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 40,
        textAlign: 'center'
    },
    loserTitle: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center'
    },
    loserText: {
        color: 'black',
        fontSize: 30,
        textAlign: 'center'
    }
})

export default PredictCard