import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {persistor,store } from '../src/reduxStore/store.js'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

//import {ThemeProvider} from  './component/ThemeContext'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>  
    <App />
    </PersistGate> 
    </Provider>
     
  </StrictMode>
)
