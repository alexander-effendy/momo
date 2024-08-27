import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Pages from './Pages';

import { KindeProvider } from "@kinde-oss/kinde-auth-react";

const App = () => {
  return (
    <KindeProvider
		  clientId='927a9fb661d741bb91268ea5df3d83ea'
		  domain='https://momomo.kinde.com'
      // redirectUri={import.meta.env.VITE_REDIRECT_URI}
      // logoutUri={import.meta.env.VITE_LOGOUT_URI}
		  redirectUri='http://localhost:5173'
		  logoutUri='http://localhost:5173'
	  > 
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </KindeProvider>
  )
}

export default App;