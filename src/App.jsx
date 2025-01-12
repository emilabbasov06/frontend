import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import Boost from './screens/Boost';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="boost" element={<Boost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App