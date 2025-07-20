import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { Provider } from 'react-redux'
import { store } from './index.js'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Provider store={store}>
  <StrictMode>
    <App />
  </StrictMode>
  </Provider>
  </BrowserRouter>
)
