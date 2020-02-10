import React, { forwardRef, useState, useImperativeHandle } from 'react';

export default forwardRef((props, ref) => {

    const [value, setValue] = useState('');

    useImperativeHandle(ref, () => ({
        value,
        changeValue
    }));

    function changeValue(value) {
        setValue(value);
    }

    return (
    <div ref={ref}>child3的值{value}</div>
    )
});