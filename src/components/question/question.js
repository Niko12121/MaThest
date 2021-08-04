import React from "react"
import "./question.css"
import questions from "./questions_ingame"

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
                let real = event.target.innerHTML === correct.toString()
                if (real) {
                    event.target.classList.add("correct");
                    this.props.action()
                    }
                else {
                    event.target.classList.add("wrong")}
                this.options -= 1;
                await sleep(1000)
                this.props.next_ques()
            }
        }
    }
    render() {
        var cls = "question ";
        cls += this.props.level+"-"+this.props.ques;
        if (this.props.level+"-"+this.props.ques === "0-0") {cls += " showing-q"}
        return (
        <div className={cls}>
            <div class="real-question" dangerouslySetInnerHTML={{__html: questions[this.props.level][this.props.option][0]}}/>
            <div class="answers-options">
            {this.render_order.map((a, index) => {
                return (
                    <div className="option" onClick={this.corroborate} dangerouslySetInnerHTML={{__html: a}}/>
                )})}
            </div>
        </div>)}}


export default Question