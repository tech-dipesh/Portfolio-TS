import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AppRouter from "./components/router/appRouter.tsx"

function App() {
  return (
    <React.StrictMode>
      {/* main application which on the app routes */}
      <AppRouter />
      
      {/* i can create a new toast file but on the app.tsx which i see less content i have add here, in futuree i will move from here. */}
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