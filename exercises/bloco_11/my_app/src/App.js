import React from 'react';
import MyName from './Component';

const taskFunction = (value) => { 
	return (
		<li>{value}</li>
	);
}

const compromissos = ['lavar louça', 'oi', 'agora sim'];

function App() { 
  return (
    compromissos.map((item => taskFunction(item)))
  );
}

export default App;