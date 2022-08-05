import { useEffect} from 'react';
import './App.css'; 
import Navbar from './modules/Navbar';
import Registeruser from './modules/registeruser';
import NotFound from './modules/NotFound';
import Login from './modules/login';
import { Route, Routes } from 'react-router-dom';
const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={Homepage()} />
      <Route path="/register" element={<Registeruser />} />
      <Route path="/login" element={<Login />} />
      
    </Routes>
    </>
  );
}
const Homepage= () => {
  useEffect(() => {
    document.title = 'Homepage';
    });
  return (
    <div className="App">
      <h1>Home!!</h1>
    </div>
  );
}

export default App;
