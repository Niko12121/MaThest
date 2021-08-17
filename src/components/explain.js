import React from "react";

class Explain extends React.Component {
    constructor(props) {
        super(props);
        this.basic = ["Section 1 to Section 5", "basic"]
        this.int = ["Section 6 to Section 10", "int"]
        this.coll = ["Section 11 to Section 15", "coll"]
        this.maj = ["Section 16 to Section 20", "maj"]
        this.squares = [this.basic, this.int, this.coll, this.maj]
    }

    render() {
        const style = {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px",
            borderBottomLeftRadius: "0",
            borderBottomRightRadius: "0",
            opacity: "0.3",
            transition: "0.5s",
            fontSize: "clamp(10px, 2vw, 15px)",
          };
        if (this.props.explain >= 4) {return ""}
        return <div id="explain">
                    {this.squares.map((a, index) => {
                        if (this.props.explain === index) {
                            return <div style={Object.assign({}, style, {opacity: "0.8"})} id={a[1]}>{a[0]}</div>
                        }
                    return <div style={style} id={a[1]}>{a[0]}</div>})}
                </div>
    }
}

  

export default Explain