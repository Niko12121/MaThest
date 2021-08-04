import React from 'react';
import './explain.css';

class Explain extends React.Component {
    render() {
        return <div id="explain"><p id="explain-text">Sections distribution:<br></br><br></br><table id="explain-table">
            <tr><th>Sections</th><th>Level</th><th>~Age</th></tr>
            <tr><td>1-5</td><td>Basic math education</td><td>0-13</td></tr>
            <tr><td>6-10</td><td>Medium math education</td><td>14-17</td></tr>
            <tr><td>11-15</td><td>College-introduction math education</td><td>18-19</td></tr>
            <tr><td>16-20</td><td>College math education</td><td>20-22</td></tr>
            </table></p></div>
    }
}

export default Explain