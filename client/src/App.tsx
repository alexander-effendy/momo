import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Pages from './Pages';

import {KindeProvider} from "@kinde-oss/kinde-auth-react";

const App = () => {
  return (
    <KindeProvider
		  clientId={import.meta.env.VITE_KINDE_CLIENT_ID}
		  domain={import.meta.env.VITE_KINDE_DOMAIN}
      // redirectUri={import.meta.env.VITE_REDIRECT_URI}
      // logoutUri={import.meta.env.VITE_LOGOUT_URI}
		  redirectUri="http://localhost:5173"
		  logoutUri="http://localhost:5173"
	  >
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </KindeProvider>
  )
}

export default App