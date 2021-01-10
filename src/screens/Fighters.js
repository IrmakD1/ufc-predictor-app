import React, { Component } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { connect } from 'react-redux';
import { filter } from 'lodash'

import Styles from '../assets/constants/styles';
import * as errorSelectors from '../selectors/error'
import * as weightActions from '../actions/weight'
import * as fighterActions from '../actions/fighters'
import * as weightSelectors from '../selectors/weights'
import { ListItem, ErrorModal } from '../components/atoms';
import { BackBanner } from '../components/molecules';

class Fighters extends Component {

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

        this.setState(() => ({
            choice1: '',
            choice2: ''
        }))

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
        const { choice1, choice2 } = this.state

        return choice1 === item.competitor_id || choice2 === item.competitor_id ? true : false 
    }

    handleErrorClose = () => {
        const { navigation } = this.props

        navigation.navigate('Home')
    }

    render() {

        const { navigation, rankedFighters, error } = this.props
        const { choice1, choice2 } = this.state

        if(choice1 !== '' && choice2 !== '') {
            this.navigateToPredict()
        }

        return (
            <View style={styles.screen}>
                <BackBanner 
                    navigation={navigation} 
                    text='Select 2 Fighters' 
                    route="Weights" 
                    marginLeft={-122}/>
                {error === 'Ranked Fighters' && (
                <View style={styles.modalContainer}>
                    <ErrorModal
                        handleClose={this.handleErrorClose} 
                        text="There was an error getting the Fighter data."/>
                </View>
                )}
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
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

const mapStateToProps = (state) => ({
    weightCategory: weightSelectors.getWeightclass(state),
    rankedFighters: weightSelectors.getRankedFighters(state),
    error: errorSelectors.getError(state)
})

export default connect(mapStateToProps, { ...weightActions, ...fighterActions })(Fighters)