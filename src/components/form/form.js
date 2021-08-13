import React from 'react';
import './form.css';
import Test from "../test/test";
import * as cons from '../../constants';

class Form extends React.Component {
    state = { isready: false, many_ques: 3, many_sec: 20, requer: 2 }
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

    render() {
        if (this.state.isready) {
            return( <Test many_q={this.state.many_ques} many_s={this.state.many_sec} requer={this.state.requer} /> )
        }
        return (
            <div id="form">
                <form>
                    How many <b>sections</b>?<br></br><select id="levels_value" onChange={(event) => {this.setState({ many_sec: parseInt(event.target.value) })}}>
                        {this.levels.map(a => {
                            if (a === cons.level_value) {
                                return <option value={a} selected>{a}</option>}
                            return <option value={a}>{a}</option>
                        })}
                    </select><br></br><br></br>
                    How many questions per section?<br></br><select id="questions_value" onChange={(event) => {this.setState({ many_ques: parseInt(event.target.value), requer: parseInt(event.target.value)}); console.log(this.state)}}>
                        {this.options.map(a => {
                            if (a === 3) {
                                return <option value={a} selected>{a}</option>}
                            return <option value={a}>{a}</option>
                        })}
                    </select><br></br><br></br>
                    How many question to pass every section<br></br>
                    <input type="range" min="0" max={this.state.many_ques} value={this.state.requer} id="requirement" onChange={(event) => { this.setState({requer: parseInt(event.target.value)});}}></input><br></br>
                    You will need <b>{this.state.requer}</b> corrects every section
                    <br></br><br></br><br></br>
                </form>
                <button onClick={() => {this.setState({ isready: true })}}>Let's play!</button>
            </div>
        )
    }
}

export default Form