import React from 'react';
import ReactDOM from 'react-dom';
import PowerMeter from './PowerMeter';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PowerMeter />, div);
});
