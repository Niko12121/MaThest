import Question from "../question/question"

/* How many questions per level will the page render */
const amount_value = 2
/* How many questions per level are already wrote (max_value >= amount_value) */
const max_value = 3
/* How many levels exist */
const level_value = 2

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

const Test = () => {
    let randoms = []
    /* randoms is like [[0, [2, 7, 4]], [1, [1, 5, 2]]], for the level 0, the questions 2, 7 and 4; 
    for the level 1, questions 1, 5, 2 */
    for (let i=0; i<level_value; i++) {
        randoms.push([i, pickRandoms(amount_value, max_value)])
    }
    let render = []
    randoms.forEach(a => {
        render.push(<div>INICIO DE SECCION</div>)
        a[1].forEach(b => {
            render.push(<Question level={a[0]} option={b} />)
        })
        render.push(<div>TERMINO DE SECCION</div>)
    })
    return (
        <div>
            {render.map(a => {
                return <div key={a.id}>{a}</div>
            })}
        </div>
    )
}

export default Test