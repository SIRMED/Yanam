import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './global/Nav';
import Donate from './routes/donate/Donate';
import Home from './routes/root/Home';

function App() {
  return (<>
    <Nav />
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/donate" element={<Donate />} />

    </Routes>
  </>);
}

export default App;
