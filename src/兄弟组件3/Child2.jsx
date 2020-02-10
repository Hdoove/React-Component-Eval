import React, { Component } from 'react';
import event from './event';


export default class Child1 extends Component {
    constructor() {
        super();
        this.state = {
            value: 0
        }
    }

    componentDidMount() {
        event.on('dispatch', this.valueChange);
    }

      valueChange = value => {
        this.setState({
            value
        })
    }

    componentWillUnmount() {
        event.remove('dispatch', this.valueChange);
    }

    render() {
        return (
            <div>
                这是子组件的value {this.state.value}
            </div>
        )
    }
}