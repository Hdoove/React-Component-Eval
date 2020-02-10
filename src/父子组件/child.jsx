import React from 'react';

function Child(props) {

    const {name, changeName} = props;

    return (
        <div style={{ border: '1px solid red', margin: 100 }}>
            { name }
            <button onClick={() => changeName('hd')}>按钮</button>
        </div>
    );
}

export default Child;