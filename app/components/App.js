var React = require('react');
var Popular = require('./Popular.js');

//component definition
class App extends React.Component {
    render() {
        return(
            <div><Popular /></div>
        )
    }
}

module.exports = App;
