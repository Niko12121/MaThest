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
        this.correct_ans = this.render_order[0]
        this.render_order = this.render_order.sort(function() { return Math.random() - 0.5 })

        /* When the answer select the correct/wrong answer */
        this.check = async (event, win) => {
            if (this.options === 0) {return};
            this.options -= 1;
            win ? event.target.classList.add("correct") : event.target.classList.add("wrong");
            this.props.action();
            await sleep(1000);
            this.props.next_ques()
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
                if (a === this.correct_ans) {
                    return(
                        <div className="option" onClick={(event) => this.check(event, true)} dangerouslySetInnerHTML={{__html: "<div class='trap'>"+a+"</div>"}}/>
                    )}
                return (
                    <div className="option" onClick={(event) => this.check(event, false)} dangerouslySetInnerHTML={{__html: "<div class='trap'>"+a+"</div>"}}/>
                )})}
            </div>
        </div>)}}


export default Question