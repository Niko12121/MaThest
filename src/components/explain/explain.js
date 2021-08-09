import React from 'react';
import './explain.css';

class Explain extends React.Component {
    render() {
        return <div id="explain"><p id="explain-text">Sections distribution:<br></br><br></br><table id="explain-table">
            <tr><th>Sections</th><th>Level</th></tr>
            <tr><td>1-5</td><td>Basic math education</td></tr>
            <tr><td>6-10</td><td>Medium math education</td></tr>
            <tr><td>11-15</td><td>College-introduction math education</td></tr>
            <tr><td>16-20</td><td>College math education</td></tr>
            </table></p></div>
    }
}

export default Explain