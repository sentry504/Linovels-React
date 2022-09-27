import React from 'react'
import ReactDom from 'react-dom/client'
import {NavbarComponent} from "./Navbar.jsx"
import  Home from "./Home"

const rootElement = document.getElementById('root')
const root = ReactDom.createRoot(rootElement)

//<Saludo/> --> SCT (Self Clousing Tags)
root.render(
        <div>
            <NavbarComponent></NavbarComponent>
        <main>
            <Home></Home>
        </main>
        </div>
        );