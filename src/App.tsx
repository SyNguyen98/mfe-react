import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import ReactComponent from "./components/ReactComponent";

const App = () => (
    <div className="container">
        <div>Name: mfe-react</div>
        <div>Framework: react</div>
        <div>Language: TypeScript</div>
        <div>CSS: Empty CSS</div>

        <ReactComponent/>
    </div>
)
const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement)

root.render(<App/>)