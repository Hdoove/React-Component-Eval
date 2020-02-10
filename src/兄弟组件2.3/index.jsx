import React, { createContext, useState, useRef } from 'react';
import Child1 from './Child1';
import Child2 from './Child2';
import Child3 from './Child3';

export const Context = createContext();

function Parent() {

    const [value, setValue] = useState('');
    const ref = useRef();


    function changeValue(value) {
        setValue(value);
    }
    return (
        <Context.Provider value={{ value: value, changeValue: changeValue }}>
            <div style={{ border: '1px solid' }}>
                <Child1 />
                <Child2 />
                <Child3 ref={ref} />
                <button onClick={() => ref.current && ref.current.changeValue('修改了')}>修改child3的值</button>
            </div>
        </Context.Provider >
    );
}

export default Parent;