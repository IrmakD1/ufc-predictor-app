import _ from 'lodash'

const predict = (a, b) => {
    let fighter1Score = 0
    let fighter2Score = 0

    let fighterA = {...a}
    let fighterB = {...b}

    fighterA.record = a.record.wins - a.record.losses
    fighterB.record = b.record.wins - b.record.losses
    fighterA.knockdowns = a.knockdowns[0]
    fighterB.knockdowns = b.knockdowns[0]
    fighterA.striking = a.siginificantStrikePercentage[0]
    fighterB.striking = b.siginificantStrikePercentage[0]
    fighterA.takedowns = a.takedownPercentage[0]
    fighterB.takedowns = b.takedownPercentage[0]
    fighterA.totalStriking = a.totalStrikesPercentage[0]
    fighterB.totalStriking = b.totalStrikesPercentage[0]

    _.forEach(fighterA, statA => {
        _.forEach(fighterB, statB => {
            if (statA > statB) fighter1Score ++ 
            if (statB > statA) fighter2Score ++ 
        })
    })

    if (fighter1Score > fighter2Score) return ({winner: fighterA, loser: fighterB})

    if (fighter2Score > fighter1Score) return ({winner: fighterB, loser: fighterA}) 

    if (fighter1Score === fighter2Score) return ({winner: fighterB, loser: fighterA}) 
}

export default predict