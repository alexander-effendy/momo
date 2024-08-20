import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Pages from './Pages';

const App = () => {
  return (
    <BrowserRouter>
        <Pages />
    </BrowserRouter>
  )
}

export default App