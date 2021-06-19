import './question.css'
import questions from './questions_ingame'
import AnswerOption from '../answers/answer_option'

const Question = (props) => {

    const order = questions[props.level][props.option][1]
    order.sort(function() { return Math.random() - 0.5 }) 

    return (
        <div class='question'>
            <div class='real_question'>
                {questions[props.level][props.option][0]}
            </div>
            {order.map(a => {
                return (<AnswerOption text={a}/>)
            })}
        </div>
    )
}




export default Question