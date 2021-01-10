import React, { Component } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { connect } from 'react-redux';

import { ErrorModal } from '../components/atoms'
import { FightCard, FightCardModal } from '../components/molecules'
import * as eventSelectors from '../selectors/events'
import * as errorSelectors from '../selectors/error'
import * as fighterSelectors from '../selectors/fighters'
import * as eventActions from '../actions/events'
import * as fighterActions from '../actions/fighters'
import { BackBanner } from '../components/molecules'
import Styles from '../assets/constants/styles'

class Event extends Component {

    state = {
        fighter1: {
            name: ''
        },
        fighter2: {
            name: ''
        }
    }

    componentDidMount() {
        const { eventId, handleAddEventDetails } = this.props
        
        handleAddEventDetails(eventId)
    }

    handleOnPress = async (fighters) => {

        const { handleAddFighterDetails, clearFighterDetails } = this.props

        clearFighterDetails()

        this.setState(() => ({
            fighter1: {
                id: fighters.competitorOneId,
                name: fighters.competitors[0]
            },
            fighter2: {
                id: fighters.competitorTwoId,
                name: fighters.competitors[1]
            }
        }))

        handleAddFighterDetails(fighters)
    }

    handleModalClose = () => {
        this.setState(() => ({
            fighter1: {
                name: ''
            },
            fighter2: {
                name: ''
            }
        }))
    }

    handlePredictPress = () => {
        this.setState(() => ({
            fighter1: {
                name: ''
            },
            fighter2: {
                name: ''
            }
        }))
        
        const { navigation } = this.props
        navigation.navigate('Predict')

    }

    handleErrorClose = () => {
        const { navigation } = this.props

        navigation.navigate('Home')
    }

    render() {
        const { eventDetails, fighterDetails, navigation, error } = this.props
        const { fighter1, fighter2 } = this.state

        return (
            <View style={styles.screen}>
                <BackBanner 
                    navigation={navigation} 
                    text='Select a Fight to Predict' 
                    route="Calendar" 
                    marginLeft={-90}/>
                <View style={styles.listContainer}>
                    <FlatList 
                        data={eventDetails} 
                        keyExtractor={(item, index) => item.id}
                        renderItem={({item}) => (
                            <FightCard 
                            nameOne={item.competitors[0]} 
                            nameTwo={item.competitors[1]} 
                            weightclass={item.weightclass}
                            fighters={item}
                            handleOnPress={this.handleOnPress}
                            />
                    )}/>
                    {error === 'Event Details' && (
                        <View style={styles.modalContainer}>
                            <ErrorModal
                                handleClose={this.handleErrorClose} 
                                text="There was an error getting the event data."/>
                        </View>
                    )}
                    {error === 'Fighter Details' && (
                        <View style={styles.modalContainer}>
                            <ErrorModal
                                handleClose={this.handleErrorClose} 
                                text="There was an error getting fighter data."/>
                        </View>
                    )}
                    {fighter1.name !== '' && error !== 'Fighter Details' && (
                        <View style={styles.modalContainer}>
                            {fighterDetails === undefined && (
                                <FightCardModal
                                fighter1Name={fighter1.name}
                                fighter2Name={fighter2.name}
                                fighter1Details={''}
                                fighter2Details={''}
                                handleOnPress={this.handlePredictPress} 
                                handleClose={this.handleModalClose}
                                />
                            )}
                            <FightCardModal
                                fighter1Name={fighter1.name}
                                fighter2Name={fighter2.name}
                                fighter1Details={fighterDetails.fighterOne}
                                fighter2Details={fighterDetails.fighterTwo}
                                handleOnPress={this.handlePredictPress} 
                                handleClose={this.handleModalClose}
                            />
                        </View>
                    )}
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    eventId: eventSelectors.getEventId(state),
    eventDetails: eventSelectors.getEventDetails(state),
    fighterDetails: fighterSelectors.getFighterDetails(state),
    error: errorSelectors.getError(state)
})

const styles = StyleSheet.create({
    screen: Styles.screen,
    listContainer: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 10
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    arrowContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginTop: -40,
        marginLeft: -350
    }
})

export default connect(mapStateToProps, { ...eventActions, ...fighterActions })(Event)