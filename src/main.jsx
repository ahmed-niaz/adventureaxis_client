import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { router } from './routes/routes.jsx'
import { RouterProvider } from 'react-router-dom'
import FirebaseProvider from "./providers/FirebaseProvider";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <FirebaseProvider>
      <RouterProvider router={router} />
    </FirebaseProvider>
  </React.StrictMode>,
)
