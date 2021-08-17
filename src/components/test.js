import React from "react";
import Explain from "./explain"
import Question from "./question"
import * as cons from "../constants";


/* This function return a list with amount elements, whit different randoms whole numbers 
between 0 and max */
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

class Test extends React.Component {
    /* Which section and question render */
    state = { explain: 0, section: 0, question: 0, corrects: 0, finished: false, win: false}
    constructor(props) {
        super(props);
        this.total_points = []
        this.score = 0
        this.questions_values = []
        this.randoms = []
        this.colors = [["yellowgreen", "black"], ["orange", "black"], ["purple", "white"], ["black", "white"], ["",""]]
        for (let i = 0; i<20; i++) {
            this.randoms.push(pickRandoms(this.props.many_q, cons.max_value))
        }
        for (let sec = 0; sec < 20; sec++) {
            let q = 0;
            for (let j of this.randoms[sec]) {
                this.questions_values.push([sec, q, j])
                q++}
        }
    }

    /* When the user select an option, this function detect the question, register the next-one and show to the user */
    next_question = (correct) => {
        correct && this.setState({ corrects: this.state.corrects + 1 })
        this.setState({ question: this.state.question + 1 })

        /* If is the end of the section */
        if (this.state.question >= this.props.many_q) {
            this.total_points.push(this.state.corrects)
            this.score += this.state.corrects;
            /* if lose the section */
            if (this.state.corrects < this.props.requer) {
                this.setState({ finished: true, explain: 4 })}
            else {
                /* Is the end of the test? */
                this.state.section === 19 ? this.setState({ finished: true, win: true }) : this.setState({ section: this.state.section + 1, question: 0, corrects: 0 })
                this.state.section % 5 === 0 && this.setState({ explain: this.state.explain + 1 })
            }
        }
    }

    render () {
        if (this.state.finished) {
            return <div id="info">
                You played the math test with {this.props.many_q} questions every section<br></br>
                You needed {this.props.requer} corrects every section to pass<br></br>
                You arrived to the section {this.state.section}<br></br>
                {this.total_points.map((a, index) => {
                    return <p>Section {index + 1}: {a}/{this.props.many_q}</p>
                })}
                This give you a total of {this.score}/{(this.state.section + 1) * this.props.many_q} = {Math.floor(100 * this.score / ((this.state.section + 1) * this.props.many_q))}%<br></br>
                <b>
                {this.state.win ? (
                    <p>Congratulations</p>
                ) : (
                    <p>Try again</p>
                )}</b><br></br>
                <button type="button" onClick={() => {window.location.reload()}}>Play again</button></div>
        }
        return (
            <div class="app">
                <Explain explain={ this.state.explain }/>
                <div class="counting" style={{ 
                    backgroundColor: this.colors[Math.floor(this.state.section / 5)][0], 
                    color: this.colors[Math.floor(this.state.section / 5)][1] }}>
                        <div class="section-info" id="info-sec">Section {this.state.section + 1}/{cons.level_value}</div>
                        <div class="section-info" id="info-ques">Question: {this.state.question+1}/{this.props.many_q}</div>
                        <div class="section-info" id="info-corr">Corrects: {this.state.corrects}/{this.props.requer}</div>
                </div>
                {this.questions_values.map(a => {
                    if (this.state.section === a[0] && this.state.question === a[1]) {
                        return <Question section={a[0]} option={a[2]} action={this.handler} ques={a[1]} next_ques={this.next_question}/>
                    }
                    return ""
                })}
            </div>
        )
    }
}

export default Test;
