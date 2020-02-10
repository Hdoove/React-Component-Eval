import React, { Component } from 'react';
import event from './event';

export default class Child extends Component {

    setValue = () => {
        event.emit('dispatch', 1);
    }

    render() {
        return (
            <div>
                子组件1
                <button onClick={this.setValue}>通知B</button>
            </div>
        )
    }
}
