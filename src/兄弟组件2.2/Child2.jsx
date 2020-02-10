import React, { Component } from 'react';
import { Context } from './index';


class Child2 extends Component {

    render() {
        return (
            <Context.Consumer>
                {
                    data => {
                        return (
                            <div style={{ background: 'yellow' }}>
                                我是child2，这是child1传过来的值{data.value}
                            </div>
                        )
                    }
                }
            </Context.Consumer>

        )
    }
}

export default Child2;