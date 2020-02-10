import React, { Component } from 'react';

class Child2 extends Component {

    render() {
        const {value} = this.props;
        return (
            <div style={{ background: 'yellow' }}>
                我是child2，这是child1传过来的值{value}
                
            </div>
        )
    }
}

export default Child2;