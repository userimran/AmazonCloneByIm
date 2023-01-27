import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './Components/redux/store';
import ContextProvider from './Components/Context/ContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
    <BrowserRouter>
      <Provider store={store} >
        <App />
      </Provider>
    </BrowserRouter>
  </ContextProvider>

);
 
// ReactDOM.render(
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//         ,
//   document.getElementById('root')
// );
