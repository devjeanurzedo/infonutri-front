import React from 'react';
//render: responsável por enviar todo o código do react para o html 
import { render } from 'react-dom';
import App from './App';


render(<App/>, document.getElementById('app'));