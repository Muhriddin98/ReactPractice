import React, {Component} from 'react';

class CarsDetail extends Component {
    goToHomePage = () => {
        this.props.history.push({
            pathname: '/'
        })
    }
    render() {
        return (
            <div style={{
                textAlign: 'center'
            }}>
                <button onClick={this.goToHomePage}>Go to Home</button>
                <hr/>
                <h1>{this.props.match.params.name}</h1>
            </div>
        );
    }
}

export default CarsDetail;