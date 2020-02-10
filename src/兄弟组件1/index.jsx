import React, { Component } from 'react';
import Child1 from './Child1';
import Child2 from './Child2';

class Parent extends Component {

    state = {
        value: ''
    }

    changeValue = value => {
        this.setState({
            value
        });
    }

    render() {
        const { value } = this.state;
        return (
            <div style={{ border: '1px solid' }}>
              <Child1 changeValue={ this.changeValue }/>
              <Child2 value={value}/>
            </div>
          );
    }
}

export default Parent;