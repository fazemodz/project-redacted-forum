import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './modules/Homepage';
import Navbar from './modules/Navbar';
import Registeruser from './modules/Registeruser';
const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* {/* <Route path="*" element={<NotFound />} /> */}
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Registeruser />} /> 
        {/* <Route path="/login" element={<Login />} />
        <Route path="/user/:UserId" element={<UserProfile />} />
        <Route path="/forum/:Forumurl" element={<Forum />} />
        <Route path="/forum/createforum" element={<Createforum />} /> */}
      </Routes>
    </>
  );
}
export default App;