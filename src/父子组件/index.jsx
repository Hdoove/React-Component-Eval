import React, { Component } from 'react';
import Child from './child';

class Parent extends Component {

    state = {
        name: 'lj'
    }

    changeName = name => {
        this.setState({
            name
        });
    }

    render() {
        const { name } = this.state;
        return (
            <div style={{ border: '1px solid' }}>
              parent
              <Child name={name} changeName={this.changeName}/>
            </div>
          );
    }
}

export default Parent;