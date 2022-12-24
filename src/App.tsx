import { useEffect, useState, Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './modules/login';
import Navbar from './modules/Navbar';
import NotFound from './modules/NotFound';
import Registeruser from './modules/registeruser';
import UserProfile from './modules/UserProfile';
import Forum from './modules/forum';
import Createforum from './modules/createforum';
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
const Homepage = () => {
  const [Posts, setPosts] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    GetPosts();
  }, []);
  const GetPosts = () => {
    // get posts from api
    axios.get('http://localhost:5000/api/v1/Post-endpoint/Get-all-posts')
      .then((response) => {
        console.log(response.data);
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <>
      {isLoading ?
        <div className="grid place-items-center h-screen">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
        </div> :
        <div className="dark:bg-gray-800 dark:text-gray-50 p-6">
          <div className="container grid grid-cols-12 mx-auto dark:bg-gray-900">
            <div className="bg-no-repeat bg-cover dark:bg-gray-700 col-span-full lg:col-span-4"></div>
            <div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
              <div className="flex justify-start">
                <span className="px-2 py-1 text-xs rounded-full dark:bg-violet-400 dark:text-gray-900">Label</span>
              </div>
              <h1 className="text-3xl font-semibold">Lorem ipsum dolor sit.</h1>
              <p className="flex-1 pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, reprehenderit adipisci tempore voluptas laborum quod.</p>
              <a rel="noopener noreferrer" href="#" className="inline-flex items-center pt-2 pb-6 space-x-2 text-sm dark:text-violet-400">
                <span>Read more</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </a>
              <div className="flex items-center justify-between pt-2">
                <div className="flex space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 dark:text-gray-400">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path>
                  </svg>
                  <a rel="noopener noreferrer" href="#">
                    <span className="self-center underline text-sm">by Leroy Jenkins</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}
export default App;