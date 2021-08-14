import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from "./components/header/header";
import Form from "./components/form/form";
import Explain from "./components/explain/explain";

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

ReactDOM.render(<App/>, document.getElementById('root'));

reportWebVitals();
