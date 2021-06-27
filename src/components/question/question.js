import './question.css'
import questions from './questions_ingame'

const Question = (props) => {
    /* How many options have the tested for question */
    var options = 1

    /*This part randomize the order of answers and save the correct answer*/
    let render_order = questions[props.level][props.option][1]
    const correct = render_order[0]
    render_order = render_order.sort(function() { return Math.random() - 0.5 })


    let corroborate = (event) => {
        if (options >= 1) {
            let real = event.target.innerText == correct
            real ? event.target.classList.add('correct') : event.target.classList.add('wrong')
            /*real ? event.target.style.backgroundColor = '#00a939' : event.target.style.backgroundColor = '#de3d3d'
            */
            options -= 1
        }
    }

    return (
        <div class="question">
            <div class='real_question'>
                {questions[props.level][props.option][0]}
            </div>
            {render_order.map((a, index) => {
                return (
                    <div className='option' onClick={corroborate}>
                        {a}
                    </div>
                )})}
        </div>
    )}


export default Question