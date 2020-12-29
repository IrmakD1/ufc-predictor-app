import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { connect } from 'react-redux';

import { Loader, PredictCard } from '../components/molecules'
import * as fighterSelectors from '../selectors/fighters'
import predict from '../services/predict'
import Styles from '../assets/constants/styles'


class Predict extends Component {

    state = {
        loading: true,
        winner: '',
        loser: ''
    }

    componentDidMount(){
        const { fighterDetails } = this.props
        
        setTimeout(() => {
            this.setState(() => ({
                loading: false
            }))
        }, 4000);

        const results = predict(fighterDetails.fighterOne, fighterDetails.fighterTwo)

        this.setState(() => ({
            winner: results.winner,
            loser: results.loser
        }))
    }

    handlePressHome = () => {
        const { navigation } = this.props
        navigation.navigate('Home')
    }

    handlePressPredictAgain = () => {
        const { navigation } = this.props
        navigation.navigate('Event')
    }

    render() {
        const { loading, winner, loser } = this.state
        if(loading === true) return (
            <View style={styles.screen}>
                <Loader />
            </View>
        )
        return (
            <View style={styles.screen}>
                <PredictCard 
                    winner={winner} 
                    loser={loser} 
                    handlePredict={this.handlePressPredictAgain}
                    handleHome={this.handlePressHome}/>
            </View>
        )
    }
    
}

const styles = StyleSheet.create({
    screen: Styles.screen
})

const mapStateToProps = (state) => ({
    fighterDetails: fighterSelectors.getFighterDetails(state)
})

export default connect(mapStateToProps)(Predict)