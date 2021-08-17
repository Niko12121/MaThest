import React from "react"
import questions from "../questions_ingame"

/*sleep the code ms miliseconds*/
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

class Question extends React.Component {
    constructor(props) {
        super(props);
        /* How many options have the tested for question */
        this.options = 1
        /* This part randomize the order of answers and save the correct answer */
        this.render_ord = questions[this.props.section][this.props.option][1]
        this.correct_ans = this.render_ord[0]
        /* When the answer select the correct/wrong answer */
    }    

    check = async (event, win) => {
        if (this.options === 0) {return};
        this.options -= 1;
        win ? event.target.classList.add("correct") : event.target.classList.add("wrong");
        await sleep(1000);
        this.props.next_ques(win)
    }

    render() {
        const style = {
            position: "absolute",
            color: "black",
            backgroundColor: "transparent",
            width: "100%",
            textAlign: "center",
            height: "175px",
            borderRadius: "10px"
        }
        this.render_order = this.render_ord.sort(function() { return Math.random() - 0.5 })
        return (
        <div class="question" style={ style }>
            <div class="real-question" dangerouslySetInnerHTML={{__html: questions[this.props.section][this.props.option][0]}}/>
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