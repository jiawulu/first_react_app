import React, {Component} from 'react';
import ClickCounter from './ClickCounter'

class ClickCounterGroup extends Component {

    constructor(props) {
        super(props);
        this.onCounterUpdate = this.onCounterUpdate.bind(this);
        this.state = {
            sum : 6
        }
    }

    onCounterUpdate() {
        this.setState({ sum: this.state.sum + 1});
    }

    render() {
        return (
            <div>
                <ClickCounter onUpdate={this.onCounterUpdate} initialValue={1}/>
                <ClickCounter onUpdate={this.onCounterUpdate} initialValue={2}/>
                <ClickCounter onUpdate={this.onCounterUpdate} initialValue={3}/>

                <hr/>

                total : {this.state.sum}
            </div>
        );
    }



}

export default ClickCounterGroup;
