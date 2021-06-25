import './question.css'
import questions from './questions_ingame'

const Question = (props) => {
    /*This part randomize the order of answers*/
    let render_order = questions[props.level][props.option][1]
    const correct = render_order[0]
    render_order = render_order.sort(function() { return Math.random() - 0.5 })
    let to_render = []
    render_order.forEach(a => to_render.push({text: a, real: correct===a}))
    console.log(to_render)

    return (
        <div class='question'>
            <div class='real_question'>
                {questions[props.level][props.option][0]}
            </div>
            {to_render.map((a) => (
                <div class='option' key={a.id}> {a.text} {a.real.toString()}</div>
            ))}
        </div>
    )}


export default Question