import React, { useContext, useState } from 'react';
import { Context } from './index';

function Child1() {

    const [value, setValue] = useState('');
    const { changeValue } = useContext(Context);

    function inputChange(e) {
        setValue(e.target.value);
    }

    function toChild2() {
        changeValue(value);
    }

    return (
        <div style={{ background: 'red', margin: '100px 0px' }}>
            我是child1
            <input type="text" onChange={inputChange} value={value} />
            <button onClick={toChild2}>通知B</button>
        </div>
    )
}
export default Child1;