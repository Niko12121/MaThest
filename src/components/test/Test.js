import React from "react"
import Question from "../question/question"
import './test.css'
import * as cons from '../../constants';

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
        this.randoms = pickRandoms(cons.amount_value, cons.max_value)
        this.questions = []
        let q = 0;
        for (let i in this.randoms) {
            this.questions.push(<Question level={this.props.level} option={i} action={this.handler} ques={q}/>)
            q++}
    }
    handler = () => {
        this.setState({ points: this.state.points+1 })
    }
    render() {
        var cls = 'section '+"sec-"+this.props.level;
        if (this.props.level == '0') {cls += ' showing-sec'}
        return(
            <div className={cls}>
                <div class='counting'>{this.state.points}/{cons.amount_value}</div>
                {this.questions.map(a => {
                    return <div>{a}</div>
                })}
            </div>
            )
        }
    
}

const Test = () => {
    let sections = []
    for (let i=0; i < cons.level_value; i++) {
        sections.push(i)
    }
    return (
        <div class='app'>
            {sections.map(a => {
                return <Section level={a}/>
            })}
        </div>
    )
}

export default Test;
