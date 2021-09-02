import React from 'react';
import ReactDOM from 'react-dom';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import App from './pages/App/App';

const darkTheme = createTheme({
  palette: {
    type: 'dark',
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
       <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
