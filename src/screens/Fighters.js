import React, { Component } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { connect } from 'react-redux';
import { filter } from 'lodash'

import Styles from '../assets/constants/styles';
import * as weightActions from '../actions/weight'
import * as fighterActions from '../actions/fighters'
import * as weightSelectors from '../selectors/weights'
import { ListItem } from '../components/atoms';
import { BackBanner } from '../components/molecules';

class Weights extends Component {

    state = {
        choice1: '',
        choice2: ''
    }

    componentDidMount() {
        const { handleAddWeightClassFighters, weightCategory } = this.props

        handleAddWeightClassFighters(weightCategory)
    }

    navigateToPredict = async () => {
        const { choice1, choice2 } = this.state
        const { rankedFighters, navigation, handleAddFighterDetails, clearFighterDetails } = this.props

        await clearFighterDetails()

        const fighterOne = filter(rankedFighters, fighter => fighter.competitor_id === choice1)
        const fighterTwo = filter(rankedFighters, fighter => fighter.competitor_id === choice2)

        await handleAddFighterDetails({ competitorOneId: fighterOne[0].competitor_id, competitorTwoId: fighterTwo[0].competitor_id})

        navigation.navigate('Predict')
    }

    checkRank = (item) => {
        return item.rank === 'Champion' ? 'Champ' : item.rank
    }

    checkColour = (item) => {
        return item.rank === 'Champion' ? 'red' : 'black'
    }

    handleOnPress = (id) => {
        const { choice1, choice2 } = this.state


        if (choice1 === '' && choice2 === '') {
            this.setState(() => ({
                choice1: id
            }))
        } else if (choice1 === id) {
            this.setState(() => ({
                choice1: ''
            }))
        } else if (choice1 !== '' && choice1 !== id) {
            this.setState(() => ({
                choice2: id
            }))
        }    
    }

    isHighlighted = (item) => {
        const { choice1 } = this.state

        return choice1 === item.competitor_id ? true : false 
    }

    render() {

        const { navigation, rankedFighters } = this.props
        const { choice1, choice2 } = this.state

        if(choice1 !== '' && choice2 !== '') {
            this.navigateToPredict()
        }

        return (
            <View style={styles.screen}>
                <BackBanner 
                    navigation={navigation} 
                    text='Select a Fighter' 
                    route="Weights" 
                    marginLeft={-122}/>
                <View style={styles.listContainer}>
                    <FlatList 
                        data={rankedFighters}
                        keyExtractor={(item, index) => `${item.competitor_id}` }
                        renderItem={({item}) => (
                            <ListItem 
                                rank={this.checkRank(item)}
                                text={`${item.name}`}
                                colour={this.checkColour(item)}
                                highlight={this.isHighlighted(item)}
                                hanldeOnPress={() => this.handleOnPress(item.competitor_id)}/>
                    )}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screen: Styles.screen,
    listContainer: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 10,
        width: '100%'
    },
    arrowContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginTop: -40,
        marginLeft: -350
    }
})

const mapStateToProps = (state) => ({
    weightCategory: weightSelectors.getWeightclass(state),
    rankedFighters: weightSelectors.getRankedFighters(state)
})

export default connect(mapStateToProps, { ...weightActions, ...fighterActions })(Weights)