import React from "react"
import Question from "../question/question"
import './test.css'

/* How many questions per level will the page render */
const amount_value = 2
/* How many questions per level are already wrote (max_value >= amount_value) */
const max_value = 3
/* How many levels exist */
const level_value = 2

/* This function return a list with amount elements, whit different randoms whole numbers 
between 0 and max; used like */
function pickRandoms(amount, max) {
    let actual = []
    for (let i = 0; i < amount; i++) {
        let randomNumber = Math.floor(Math.random() * max)
        while (actual.includes(randomNumber)) {
            randomNumber = Math.floor(Math.random() * max)
        }
        actual.push(randomNumber)
    }
    return actual
}

class Section extends React.Component {
    state = {points: 0}
    constructor(props) {
        super(props);
        this.randoms = pickRandoms(amount_value, max_value)
    }
    handler = () => {
        this.setState({ points: this.state.points+1 })
    }
    render() {
        return(
            <div>
                <div class='counting'>{this.state.points}/{amount_value}</div>
                {this.randoms.map(a => {
                    return <div><Question level={this.props.level} option={a} action={this.handler} /></div>
                })}
            </div>
            )
        }
    
}

const Test = () => {
    let sections = []
    for (let i=0; i < level_value; i++) {
        sections.push(i)
    }
    return (
        <div class='app'>
            {sections.map(a => {
                return <div class='section'><Section level={a}/></div>
            })}
        </div>
    )
}

export default Test