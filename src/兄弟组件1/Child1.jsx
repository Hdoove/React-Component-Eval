import React, { Component } from 'react';

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
        const { changeValue } = this.props;
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

export default Child1;