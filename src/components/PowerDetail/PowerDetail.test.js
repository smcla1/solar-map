import React from 'react';
import ReactDOM from 'react-dom';
import PowerDetail from './PowerDetail';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PowerDetail />, div);
});
