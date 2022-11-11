import { useEffect, useState, Component } from 'react';
import { Route, Routes  } from 'react-router-dom';
import './App.css';
import Login from './modules/login';
import Navbar from './modules/Navbar';
import NotFound from './modules/NotFound';
import Registeruser from './modules/registeruser';
import UserProfile from './modules/UserProfile';
import Forum from './modules/forum';
import Createforum from './modules/createforum';
import Postcard from './modules/postcard';
import axios from 'axios';
const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Registeruser />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user/:UserId" element={<UserProfile />} />
        <Route path="/forum/:Forumurl" element={<Forum />} />
        <Route path="/forum/createforum" element={<Createforum />} />
      </Routes>
    </>
  );
}
class Homepage extends Component {
  state = {
    Posts: [],
  }
  componentDidMount() {
    this.GetPosts();
  }
  GetPosts = () => {
    // get posts from api
    axios.get('http://localhost:5000/api/v1/Post-endpoint/Get-all-posts')
      .then((response) => {
        console.log(response.data);
        this.setState({ Posts: response.data });
        
      })
      .catch((error) => {
        console.log(error);
      });
   }
   render() {
      return (
        <>
          <h1>Homepage</h1>
        </>
      )
    }
  } 

export default App;
