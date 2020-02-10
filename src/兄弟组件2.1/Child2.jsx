import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Child2 extends Component {

    render() {
        const {value} = this.context;
        return (
            <div style={{ background: 'yellow' }}>
                我是child2，这是child1传过来的值{value}
            </div>
        )
    }
}

Child2.contextTypes = {
    value: PropTypes.string,
};

export default Child2;