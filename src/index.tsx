import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'theme-ui';
import App from './App';
import theme from './theme';

require('dotenv').config();

render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>,
    document.getElementById('root')
);
