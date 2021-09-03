import React from 'react';
import ReactDOM from 'react-dom';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { cyan, pink } from '@material-ui/core/colors';
import App from './pages/App/App';

const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: cyan,
    secondary: pink
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
