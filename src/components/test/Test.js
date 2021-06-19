import Question from "../question/Question"

const Test = () => {
    let randoms = []

    /* randoms is a list with whole number between 0 and 2, which represent the question of level i
    which will appear */
    for (let i=0; i<2; i++) {
        randoms.push([i, Math.floor(Math.random() * 3)])
    }
    return (
        <div>
            {randoms.map(a => {
               return (<Question level={a[0]} option={a[1]} />) 
            })}
        </div>
    )
}

export default Test