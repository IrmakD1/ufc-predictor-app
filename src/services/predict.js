import { ADD_EVENT } from "../actions/events"

const predict = (a, b) => {
    const fighterA = {...a, num: Math.random()}
    const fighterB = {...b, num: Math.random()}

    return fighterA.num > fighterB.num ? ({winner: fighterA, loser: fighterB}) : ({winner: fighterB, loser: fighterA}) 
}

export default predict