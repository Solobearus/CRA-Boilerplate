import React from 'react';
import ReactDOM from 'react-dom';
import {{pascalCase name}} from './{{pascalCase name}}.jsx';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<{{pascalCase name}} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
