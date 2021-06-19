import Question from "../question/Question"

const Test = () => {
    let randoms = []
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