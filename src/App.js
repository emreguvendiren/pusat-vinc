
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage.';
import Layout from './components/layout/Layout';
import NotFoundPage from './pages/NotFoundPage';
import Test from './pages/Test';

function App() {
  return (
    <Routes>
      <Route path='/test' element={<Test />} />
      <Route element={<Layout />}>
        <Route path='/' element={<HomePage />} />
        {/* 404 sayfası için catch-all route */}
        <Route path="*" element={<Navigate to="/notfound" />} />
        <Route path='/notfound' element={<NotFoundPage />} />
      </Route>
      {/* NotFoundPage route'u */}
     
    </Routes>
  );
}

export default App;
