import React, { Component } from 'react';
import { Context } from './index';

class Child1 extends Component {

    state = {
        value: ''
    }

    inputChange = e => {
        this.setState({
            value: e.target.value
        });
    }

    toChild2 = (fn) => {
        const { value } = this.state;
        fn(value);
    }

    render() {
        return (
            <Context.Consumer>
                {
                    data => {
                        return (
                            <div style={{ background: 'red', margin: '100px 0px' }}>
                                我是child1
                <input type="text" onChange={this.inputChange} value={this.state.value} />
                                <button onClick={() => this.toChild2(data.changeValue)}>通知B</button>
                            </div>
                        )
                    }
                }
            </Context.Consumer>
        )
    }
}
export default Child1;