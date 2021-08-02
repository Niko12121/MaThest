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
            this.questions.push(<Question level={this.props.level} option={this.randoms[i]} action={this.handler} ques={q} next_ques={this.next_question}/>)
            q++}
    }
    handler = () => {
        this.setState({ points: this.state.points+1 })
    }

    next_question = () => {
        this.props.next_question(this.state.points)
    }

    render() {
        /*the first question is manually renderized*/
        var cls = 'section '+"sec-"+this.props.level;
        if (this.props.level == '0') {cls += ' showing-sec'}
        return(
            <div className={cls}>
                <div class='counting'>Nivel {this.props.level + 1}<br></br>{this.state.points}/{cons.amount_value}</div>
                {this.questions.map(a => {
                    return <div>{a}</div>
                })}
            </div>
            )
        }
    
}

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.sections = []
        for (let i=0; i < cons.level_value; i++) {
            this.sections.push(i)}
    }

    /*When the user select an option, this function detect the question, register the next-one and show to the user*/
    next_question = (corrects) => {
        let actual = document.getElementsByClassName("showing-q")[0];
        actual.classList.remove("showing-q")
        /* s is the name of the actual question, which was answered */
        let s = actual.className.split(' ')[1]
        /* Number of actual section and question */
        let actual_sec = parseInt(s.split('-')[0])
        let actual_ques = parseInt(s.split('-')[1])
        let si = ''
        /* If it's NOT the end of section */
        if (actual_ques < cons.amount_value - 1) {
            /* si is the name of next questions which will be render */
            si += actual_sec.toString() + '-' + (actual_ques + 1).toString();
            let sig = document.getElementsByClassName(si)[0];
            sig.className += ' showing-q';
            return
        }
        /* If win the section, else not */
        if (corrects / cons.amount_value >= cons.requirement) {
            console.log("WIN SECTION")
            /* If it's the end of game, else not */
            if (actual_sec + 1 == cons.level_value && actual_ques + 1 == cons.amount_value) {
                console.log('¡WIN GAME!');
                return}
            /* Showing the next section */
            let actsec = document.getElementsByClassName('showing-sec')[0];
            actsec.classList.remove('showing-sec')
            let sigsec = document.getElementsByClassName('sec-' + (parseInt(actsec.classList[1].split('-')[1]) + 1).toString())[0]
            sigsec.className += ' showing-sec';
            /* Showing the first question of the new section */
            si += (actual_sec + 1).toString() + '-0';
            let sig = document.getElementsByClassName(si)[0];
            sig.className += ' showing-q';
            }
        else {
            console.log("¡LOSE GAME!");
            return}
    }

    render () {
        return (
            <div class='app'>
                {this.sections.map(a => {
                    return <Section level={a} next_question={this.next_question}/>
                })}
            </div>
    )
}}

export default Test;
