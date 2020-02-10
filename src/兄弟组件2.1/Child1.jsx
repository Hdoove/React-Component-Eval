import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Child1 extends Component {

    state = {
        value: ''
    }

    inputChange = e => {
        this.setState({
            value: e.target.value
        });
    }

    toChild2 = () => {
        const { changeValue } = this.context;
        const { value } = this.state;
        changeValue(value);
    }

    render() {

        const { value } = this.state;
        return (
            <div style={{ background: 'red', margin: '100px 0px' }}>
                我是child1
                <input type="text" onChange={this.inputChange} value={value}/>
                <button onClick={this.toChild2}>通知B</button>
            </div>
        )
    }
}
Child1.contextTypes = {
    changeValue: PropTypes.func,
};
export default Child1;