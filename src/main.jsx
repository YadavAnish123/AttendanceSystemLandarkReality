import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from '../src/reduxStore/store.js'
import { Provider } from 'react-redux'

//import {ThemeProvider} from  './component/ThemeContext'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
     
  </StrictMode>
)
