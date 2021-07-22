import React from 'react'
import './question.css'
import questions from './questions_ingame'

class Question extends React.Component {
    constructor(props) {
        super(props);
        /* How many options have the tested for question */
        this.options = 1
        /* This part randomize the order of answers and save the correct answer */
        this.render_order = questions[this.props.level][this.props.option][1]
        const correct = this.render_order[0]
        this.render_order = this.render_order.sort(function() { return Math.random() - 0.5 })


        this.corroborate = (event) => {
            if (this.options >= 1) {
                let real = event.target.innerText == correct
                if (real) {
                    event.target.classList.add('correct');
                    this.props.action()
                    }
                else {
                    event.target.classList.add('wrong')}
                this.options -= 1
            }
        }
    }
    render() {
        return (
        <div class="question">
            <div class='real_question'>
                {questions[this.props.level][this.props.option][0]}
            </div>
            {this.render_order.map((a, index) => {
                return (
                    <div className='option' onClick={this.corroborate}>
                        {a}
                    </div>
                )})}
        </div>)}}


export default Question