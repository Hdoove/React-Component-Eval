import React from 'react';
import Child1 from './Child1';
import Child2 from './Child2';

class App extends React.Component {

  render() {
      return (
          <div>
              <Child1 />
              <Child2 />
          </div>
      )
  }
}

export default App;
