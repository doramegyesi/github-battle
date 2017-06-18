var React = require('react');
var ReactDOM = require('react-dom');

class Badge extends React.Component {
    render() {
        return(
            <div>
                <img src={this.props.img}/>
                <h1>Name: {this.props.name}</h1>
                <h3>username: {this.props.username}</h3>
            </div>
        )
    }
}

ReactDOM.render(
    <Badge
        name='Dora Megyesi'
        username='dora.megyesi'
        img='https://avatars3.githubusercontent.com/u/12464420?v=3&u=297df6579d5fbf2a7e04cf26e4783c2c884c0c33&s=400'/>,
    document.getElementById('app')
);
