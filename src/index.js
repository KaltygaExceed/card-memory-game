import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createGlobalStyle} from "styled-components";


const Global = createGlobalStyle`
body {
  margin: 0;
  font-family: 'MedievalSharp', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: url("http://bgfons.com/upload/leather_texture351.jpg");
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<><Global/><App /></>)
