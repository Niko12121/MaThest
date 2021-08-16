import React from "react";
import Section from "../components/section"

class Test extends React.Component {
    /* Which section and question render */
    state = {questions: []}
    constructor(props) {
        super(props);
        this.sections = []
        this.points = []
    }

    /*When the user select an option, this function detect the question, register the next-one and show to the user*/
    next_question = (corrects) => {
        let actual = document.getElementsByClassName("showing-q")[0];
        actual.classList.remove("showing-q")
        /* s is the name of the actual question, which was answered */
        let s = actual.className.split(' ')[1]
        /* Number of actual section and question */
        let actual_sec = parseInt(s.split('-')[0])
        let actual_ques = parseInt(s.split('-')[1])
        let si = ''
        /* If it's NOT the end of section */
        if (actual_ques < this.props.many_q - 1) {
            /* si is the name of next questions which will be render */
            si += actual_sec.toString() + '-' + (actual_ques + 1).toString();
            let sig = document.getElementsByClassName(si)[0];
            sig.className += ' showing-q';
            return
        }
        this.points.push(corrects)
        /* If win the section, else not */
        if (corrects >= this.props.requer) {
            /* If it's the end of game, else not */
            if ((actual_sec + 1).toString() === this.props.many_s.toString() && (actual_ques + 1).toString() === this.props.many_q.toString()) {
                document.getElementById("explain-maj").style.opacity = 0.3
                this.giveInfo(true);
                return}
            /* Showing the next section */
            let actsec = document.getElementsByClassName('showing-sec')[0];
            let actcount = document.getElementsByClassName("showing-count")[0]
            /* next is the number of the section that will be render */
            let next = parseInt(actsec.classList[1].split('-')[1]) + 1;
            /* opacity of information boxes */
            if (next % 5 === 0) {
                /* Change color of explain */
            }
            actcount.classList.remove("showing-count")
            actsec.classList.remove('showing-sec')
            let sigsec = document.getElementsByClassName('sec-' + next.toString())[0]
            let sigcount = document.getElementById("count" + next.toString());
            sigsec.className += ' showing-sec';
            sigcount.className += " showing-count"
            /* Showing the first question of the new section */
            si += (actual_sec + 1).toString() + '-0';
            let sig = document.getElementsByClassName(si)[0];
            sig.className += ' showing-q';
            }
        else {
            this.giveInfo(false)
            return}
    }

    giveInfo = (win) => {
        /* Show the info of the game */
        let info = document.getElementById("info");
        info.style.zIndex = 200;
        info.style.display = "inline-block";
        /* Remove counting divs */
        let countings = document.getElementsByClassName("counting")
        for (let i = 0; i<Object.keys(countings).length; i++) {
            countings[i].style.display = "none";
        }
        /* t is the info */
        let t = ""
        t += `You played the math test with <b>${this.props.many_s}</b> sections and need <b>${this.props.requer}</b> corrects every section<br>`
        if (this.points.length < this.props.many_s) {t += `But you just get the section <b>${this.points.length}</b><br>`}
        t += `Each section had <b>${this.props.many_s}</b> questions<br>`
        let i = 1;
        let sum = 0
        this.points.forEach(a => {
            t += `Section ${i}: ` + a + "/" + this.props.many_q + "<br>";
            sum += a;
            i++})
        t += `That give you a total of ${sum}/${this.points.length * this.props.many_q} = <b>${Math.round(1000 * sum/(this.points.length * this.props.many_q)) / 10}%</b> of precision`
        if (win) {
            t += "<p>¡Congratulations!</p><br>";
        } else {
            t += "<p>¡Try Again!</p><br>";
        }
        info.innerHTML = t + "<button type='button' onclick='window.location.reload()'>Play again</button>";
    }

    render () {
        for (let i=0; i < this.props.many_s; i++) {
            this.sections.push(<Section level={i} next_question={this.next_question} many_q={this.props.many_q} req={this.props.requer}/>)}
        return (
            <div class='app'>
                <div id="info"></div>
                {this.sections.map(a => {
                    return a
                })}
            </div>
        )
    }
}

export default Test;
