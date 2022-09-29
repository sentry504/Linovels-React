import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App'

const rootElement = document.getElementById('root')
const root = ReactDom.createRoot(rootElement)

//<Saludo/> --> SCT (Self Clousing Tags)
root.render(
    <><App /></>
);