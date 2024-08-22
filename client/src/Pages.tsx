import { Routes, Route } from 'react-router-dom';

import Home from './screens/Home';
import About from './screens/About';

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default Pages;