import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Video, Register, Login, NotFound } from "./pages";
import Navbar from './components/navbar';
import PrivateRoute from './routes/privateRoute';
import PublicRoute from './routes/publicRoute';
import useAuthCheck from './hooks/useAuthCheck';
import Loading from './components/ui/loaders/loading';
import { Suspense } from 'react';

const App = () => {
  const authCheck = useAuthCheck();

  return !authCheck ? <Loading/> : (
    <Router>
      <Navbar />
      <Suspense fallback={''}>
      <Routes>
        <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/videos/:videoId" element={<PrivateRoute><Video /></PrivateRoute>} />
        <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
