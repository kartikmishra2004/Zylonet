import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from './storage/Auth.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { ToggleNavProvider } from './components/ToggleNav.jsx'

createRoot(document.getElementById('root')).render(
  <AuthProvider >
    <ToggleNavProvider >
      <StrictMode>
        <App />
        <ToastContainer
          className="toast-position"
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition:Bounce
          bodyClassName="toastbody" />
      </StrictMode>
    </ToggleNavProvider>
  </AuthProvider>
)
