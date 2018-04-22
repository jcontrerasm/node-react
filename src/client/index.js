import React from 'react';
import { render } from 'react-dom';
import './styles/main.scss';

const App = () => {
  return(
    <div>
      <h1>Componente React</h1>
    </div>
  )
}

render(<App />, document.getElementById('app'));
