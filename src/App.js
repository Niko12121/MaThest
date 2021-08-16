import React from 'react';
import Header from "./components/header";
import Form from "./components/form";
import Explain from "./components/explain";


function App() {
    let squares = [];
    for (let i = 0; i<25; i++) {
        squares.push(i)
    }
    return (
      <React.Fragment>
        <Header />
        <Explain />
        <Form />
        <ul class="background">
          {squares.map(a => {
            return (<li class="square">{a}</li>)}
            )}
        </ul>
      </React.Fragment>
    );
}

export default App