import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { MyApi } from './ContextApi/MyApi'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>

<MyApi>
  <BrowserRouter>
  <App/>
  </BrowserRouter>

</MyApi>

</React.StrictMode>
)
