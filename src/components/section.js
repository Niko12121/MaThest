import React from "react";
import Question from "../components/question.js";
import * as cons from '../constants';

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
    state = {points: 0, question: 1}
    constructor(props) {
        super(props);
        this.randoms = pickRandoms(this.props.many_q, cons.max_value)
        this.questions = []
        let q = 0;
        for (let i in this.randoms) {
            this.questions.push(<Question level={this.props.level} option={this.randoms[i]} action={this.handler} ques={q} next_ques={this.next_question}/>)
            q++}
    }
    handler = () => {
        this.setState({ points: this.state.points + 1 })
    }

    next_question = () => {
        this.props.next_question(this.state.points)
        this.setState({ question: this.state.question + 1 })
    }

    render() {
        /*the first question is manually renderized*/
        var cls = "section sec-" + this.props.level;
        var showcount = "counting"
        if (this.props.level === 0) {showcount += " showing-count"}
        if (this.props.level === 0) {cls += " showing-sec"}
        return(
            <div className={cls}>
                <div class={showcount} id={"count"+this.props.level}><div class="section-info" id="info-sec">Section {this.props.level + 1}/{cons.level_value}</div><div class="section-info" id="info-ques">Question: {this.state.question}/{this.props.many_q}</div><div class="section-info" id="info-corr">Corrects: {this.state.points}/{this.props.req}</div></div>
                {this.questions.map(a => {
                    return a
                })}
            </div>
            )
        }
    
}

export default Section