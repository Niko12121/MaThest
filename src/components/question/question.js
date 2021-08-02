import React from 'react'
import './question.css'
import questions from './questions_ingame'
import * as cons from '../../constants';

/*sleep the code ms miliseconds*/
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

class Question extends React.Component {
    constructor(props) {
        super(props);
        /* How many options have the tested for question */
        this.options = 1
        /* This part randomize the order of answers and save the correct answer */
        this.render_order = questions[this.props.level][this.props.option][1]
        const correct = this.render_order[0]
        this.render_order = this.render_order.sort(function() { return Math.random() - 0.5 })

        /*this function change class name of the question already answered, to show the next one, 
        and update the score*/
        this.corroborate = async (event) => {
            if (this.options >= 1) {
                let real = event.target.innerText == correct
                if (real) {
                    event.target.classList.add('correct');
                    this.props.action()
                    }
                else {
                    event.target.classList.add('wrong')}
                this.options -= 1;
                await sleep(1000)
                let actual = document.getElementsByClassName("showing-q")[0];
                actual.classList.remove("showing-q")
                let s = actual.className.split(' ')[1]
                let si = ''
                /*When the game is over*/
                if (parseInt(s[0]) + 1 == cons.level_value && parseInt(s[2]) + 1 == cons.amount_value) {
                    console.log('GANAMOSSSS')}
                else {
                    /*When the section is over*/
                    if (parseInt(s[2]) >= cons.amount_value - 1) {
                        /*function for check if the section have the points necessaries*/
                        let context = parseInt(document.getElementsByClassName("counting")[0].innerText.split("\n")[3].split("/")[0])
                        if (context / cons.amount_value >= cons.requirement) {
                            si += (parseInt(s[0]) + 1).toString() + '-0';
                            let actsec = document.getElementsByClassName('showing-sec')[0];
                            actsec.classList.remove('showing-sec')
                            let sigsec = document.getElementsByClassName('sec-' + (parseInt(actsec.classList[1].split('-')[1]) + 1).toString())[0]
                            sigsec.className += ' showing-sec'
                        } else {
                            /* CREATE DIV OF "YOU LOSE" and button of restart */
                        }
                    } else {
                        si += s[0] + '-' + (parseInt(s[2])+1).toString()};
                    let sig = document.getElementsByClassName(si)[0];
                    sig.className += ' showing-q';
                }
            }
        }
    }
    render() {
        var cls = 'question ';
        cls += this.props.level+'-'+this.props.ques;
        if (this.props.level+'-'+this.props.ques == '0-0') {cls += ' showing-q'}
        return (
        <div className={cls}>
            <div class='real-question'>
                {questions[this.props.level][this.props.option][0]}
            </div>
            <div class='answers-options'>
            {this.render_order.map((a, index) => {
                return (
                    <div className='option' onClick={this.corroborate}>
                        {a}
                    </div>
                )})}
            </div>
        </div>)}}


export default Question