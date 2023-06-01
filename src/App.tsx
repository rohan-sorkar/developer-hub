import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Video, Register, Login, NotFound } from "./pages";
import Navbar from './components/navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:videoId" element={<Video />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
