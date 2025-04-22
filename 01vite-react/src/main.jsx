import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const anotherCustomData = 'React Coding with Vite'

const ReactComponent = React.createElement(
  'a',
  { href: 'http://google.com', target: '_blank' },
  'Click me to visit google',
  anotherCustomData
)

createRoot(document.getElementById('root')).render(
    <>
        {ReactComponent}
        <App />
    </>
)
