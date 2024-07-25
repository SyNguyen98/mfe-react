import './App.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import ReactComponent from "./components/ReactComponent";

const App = () => (
    <div className="container">
        <ReactComponent/>
    </div>
)
const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement)

root.render(<App/>)