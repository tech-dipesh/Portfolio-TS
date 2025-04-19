import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AppRouter from "./components/router/appRouter.tsx"

function App() {
  return (
    <React.StrictMode>
      {/* Main Application Router */}
      <AppRouter />
      
      {/* this is the toast message */}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        toastClassName="dark:bg-gray-800 dark:text-white"
      />
    </React.StrictMode>
  )
}

export default App