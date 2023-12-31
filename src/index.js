import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BalanceDisplay from './components/balance-display';
import Menu from './components/menu';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='w-full h-screen'>
      <App />
      <Menu/>
      <div id="content-wrap" className='flex items-center justify-center h-full w-full'>
        <div className='p-4 border-r border-base-200 w-1/3 h-full'><BalanceDisplay/></div>
        <div className='p-4 w-2/3 h-full'>bbb</div>
      </div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
