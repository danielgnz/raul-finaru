import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import './index.scss';
import App from './App';

import ScrollToTop from './components/ScrollToTop/scroll-to-top.component';


ReactDOM.render(
    <BrowserRouter>
        <ScrollToTop>
            <App />
        </ScrollToTop>
       
    </BrowserRouter>, document.getElementById('root'));