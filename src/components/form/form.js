import React from 'react';
import './form.css';
import Test from "../test/test";
import * as cons from '../../constants';

class Form extends React.Component {
    state = { isready: false, many_ques: 1, many_sec: 1, requer: 0.5 }
    constructor(props) {
        super(props);
        this.options = []
        for (let i = 1; i <= cons.max_value; i++) {  
            this.options.push(i)     
        }
        this.levels = []
        for (let i = 1; i <= cons.level_value; i++) {  
            this.levels.push(i)     
        }
    }

    ready = () => {
        let q = parseInt(document.getElementById("questions_value").value);
        let l = parseInt(document.getElementById("levels_value").value);
        let r = parseInt(document.getElementById("requirement").value);
        if (isNaN(r) || r < 0 || r > 100) {
            alert('¡Requirement must be a number between 0 and 100!')
        } else {
            this.setState({ isready: true, many_ques: q, many_sec: l, requer: r/100 })
        }
    }
    render() {
        if (this.state.isready) {
            return( <Test many_q={this.state.many_ques} many_s={this.state.many_sec} requer={this.state.requer} /> )
        }
        return (
            <div id="form">
                <form>
                    How many <b>sections</b>?<br></br><select id="levels_value" value={cons.level_value}>
                        {this.levels.map(a => {
                            return <option value={a}>{a}</option>
                        })}
                    </select><br></br><br></br>
                    How many questions per section?<br></br><select id="questions_value" value={cons.max_value}>
                        {this.options.map(a => {
                            return <option value={a}>{a}</option>
                        })}
                    </select><br></br><br></br>
                    % requirement<br></br>(with 0% you will pass every section even if you fail all; with 100% you will need all correct!)<br></br><input type="number" id="requirement" placeholder="Number between 0 and 100" min="0" max="100"></input><br></br><br></br>
                </form>
                <button onClick={this.ready}>Let's play!</button>
            </div>
        )
    }
}

export default Form