import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter} from 'react-router-dom'
import './index.css';
import 'juiu-design/dist/index.css'
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    {/* 使用了路由懒加载，所以需要使用<Suspense>包起来 */}
    <Suspense fallback={<div></div>}>
      {/* <React.StrictMode> */}
        <App />
      {/* </React.StrictMode> */}
    </Suspense>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
