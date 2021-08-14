import React from 'react';
import './explain.css';

class Explain extends React.Component {
    render() {
        return <div id="explain">
            <div class="sec-explain" id="explain-basic">Basic<br></br>Section 1 to Section 5</div>
            <div class="sec-explain" id="explain-int">Medium<br></br>Section 6 to Section 10</div>
            <div class="sec-explain" id="explain-coll">College<br></br>Section 11 to Section 15</div>
            <div class="sec-explain" id="explain-maj">Math Major<br></br>Section 16 to Section 20</div>
        </div>
    }
}

export default Explain