import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


class TodoApp extends React.Component {

  
  render() {
    return (
      <App />)
    }
}


ReactDOM.render(<TodoApp />, document.getElementById('root'));

reportWebVitals();
