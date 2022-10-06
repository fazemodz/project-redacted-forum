import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './modules/login';
import Navbar from './modules/Navbar';
import NotFound from './modules/NotFound';
import Registeruser from './modules/registeruser';
import UserProfile from './modules/UserProfile';
import Forum from './modules/forum';
import Createforum from './modules/createforum';
const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={Homepage()} />
        <Route path="/register" element={<Registeruser />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user/:UserId" element={<UserProfile />} />
        <Route path="/forum/:ForumId" element={<Forum />} />
        <Route path="/forum/createforum" element={<Createforum />} />
      </Routes>
    </>
  );
}
const Homepage = () => {
  useEffect(() => {
    document.title = 'Homepage';
  });
  return (
    <div className="App">

    </div>
  );
}

export default App;
