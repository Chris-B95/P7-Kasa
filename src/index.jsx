import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Router from './components/Router'
import { BrowserRouter } from 'react-router-dom'
import './styles/index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Header />
            <Router />
        </BrowserRouter>
    </React.StrictMode>
)
