var React = require('react');
var Popular = require('./Popular.js');

//component definition
class App extends React.Component {
    render() {
        return(
            <div className='container'>
                <Popular />
            </div>
        )
    }
}

module.exports = App;
