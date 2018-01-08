import React, {Component} from 'react';

const defaultStyle = {
    margin: '10px'
};

class ClickCounter extends Component {

    constructor(props) {
        super(props);
        this.onClickButton = this.onClickButton.bind(this);
        this.state = {count: props.initialValue || 0};
    }

    onClickButton() {
        this.setState({count: this.state.count + 1});
        // this.props.updateCount(this.state.count)
        this.props.onUpdate()
    }

    render() {
        return (<div style={defaultStyle}>
            <button onClick={this.onClickButton}> Click Me</button>
            <div> Click Count: {this.state.count} </div>
        </div>);
    }
}

export default ClickCounter;
