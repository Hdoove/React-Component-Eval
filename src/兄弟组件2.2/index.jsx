import React, { Component } from 'react';
import Child1 from './Child1';
import Child2 from './Child2';

export const Context = React.createContext();

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
        return (
            <Context.Provider value={{ value: this.state.value, changeValue: this.changeValue }}>
                <div style={{ border: '1px solid' }}>
                    <Child1 />
                    <Child2 />
                </div>
            </Context.Provider >
        );
    }
}

export default Parent;