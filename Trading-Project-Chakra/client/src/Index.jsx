import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'animate.css';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';

// Define custom breakpoints
const breakpoints = {
  base: '0px',
  xsm: '320px',
  ssm:"510",
  sm: ' 660px',

  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
  xxl:"1536px",
  xxxl:"1950"
};


import './styles/styles.css'; // Import your CSS file
// Extend Chakra UI theme with custom breakpoints and background color
const theme = extendTheme({
  breakpoints,
  styles: {
    global: {
      html: {
        height:"100%",
    
        width:"100%",

       
        overflowX: "hidden", // Correct camelCase syntax for overflow-y
      },
      body: {
        height:"100%",
       
    
        width:"100%",
        background: `linear-gradient(90deg, rgba(10, 3, 46, 1) 0%, rgba(75, 52, 157, 1) 35%, rgba(175, 159, 232, 1) 100%) rgb(10, 3, 46) `,

       

  
    
       
      },
    },
    
  },
});

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById('root')
);
