import React from 'react';
import Test from "./test";
import * as cons from '../constants';

class Form extends React.Component {
    state = { isready: false, many_ques: 3, requer: 2 }
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
            document.getElementById("explain-basic").style.opacity = 0.7;
            return( <Test many_q={ this.state.many_ques } many_s={ cons.level_value } requer={ this.state.requer } /> )
        }
        return (
            <div id="form">
                <form>
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