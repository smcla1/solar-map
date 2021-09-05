import React from 'react';
import ReactDOM from 'react-dom';
import DrawTools from './DrawTools';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DrawTools />, div);
});