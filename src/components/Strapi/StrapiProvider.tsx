import React from 'react'
import App from './App'
import { AppProvider } from './context'

const StrapiProvider = () => {
  return (
    <AppProvider>

        <App/>
    </AppProvider>
  )
}

export default StrapiProvider