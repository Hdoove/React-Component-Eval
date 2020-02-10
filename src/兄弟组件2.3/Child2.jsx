import React, { useContext } from 'react';
import { Context } from './index';

function Child2() {

    const { value } = useContext(Context);

    return (
        <div style={{ background: 'yellow' }}>
            我是child2，这是child1传过来的值{value}
        </div>

    )
}

export default Child2;