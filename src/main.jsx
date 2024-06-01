import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import AuthContextProvider from "./Context/AuthContextprovider.jsx"
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <AuthContextProvider>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
    </AuthContextProvider>
  </ChakraProvider>
)
