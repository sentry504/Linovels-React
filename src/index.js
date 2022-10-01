import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App'

window.addEventListener('DOMContentLoaded',()=>{
    console.log('trabaja')
})
//import * as serviceWorker from './serviceWorker'

const rootElement = document.getElementById('root')
const root = ReactDom.createRoot(rootElement);
//<Saludo/> --> SCT (Self Clousing Tags)
root.render(
    <App />
);