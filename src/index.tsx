import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google'
import App from './App'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <GoogleOAuthProvider clientId="54442073004-0gvdr8dmme22nktu2ndabmcm76gc49ng.apps.googleusercontent.com">
    <StrictMode>
      <App />
    </StrictMode>
  </GoogleOAuthProvider>,
)
