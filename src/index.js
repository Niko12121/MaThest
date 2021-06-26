import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


class TodoApp extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div>
        <App />
      </div>
    )
  }
}


ReactDOM.render(<TodoApp />,document.getElementById('root'));

reportWebVitals();
