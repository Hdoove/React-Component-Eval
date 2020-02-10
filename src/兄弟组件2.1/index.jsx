import React, { Component } from 'react';
import Child1 from './Child1';
import Child2 from './Child2';
import PropTypes from 'prop-types';

class Parent extends Component {

    state = {
        value: ''
    }

    changeValue = value => {
        this.setState({
            value
        });
    }

    getChildContext() {
        return {
            value: this.state.value,
            changeValue: this.changeValue
        }
    }
    render() {
        return (
            <div style={{ border: '1px solid' }}>
              <Child1 />
              <Child2 />
            </div>
          );
    }
}

Parent.childContextTypes = {
    value: PropTypes.string,
    changeValue: PropTypes.func,
}

export default Parent;