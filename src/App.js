
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage.';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path='/' element={<HomePage/>}/>
      </Route>
      
    </Routes>
  );
}

export default App;
