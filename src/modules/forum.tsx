import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { UserLoginSuccess } from '../REDUXStores/user';
import { useSelector, useDispatch } from "react-redux";
import Createpost from './createpost';
import useModal from '../hooks/useModal';
export default function Forum() {
  interface ForumData {
    ForumUUID: string;
    ForumName: string;
    ForumDescription: string;
    ForumOwner: string;
    ForumOwnerUUID: string;
    ForumMemberCount: number;
    ForumMembers: [];
    ForumPosts: [];
    IsForumVerified: boolean;
    ForumNameURLFriendly: string;
  }
  const User = useSelector((state: any) => state.user.value);
  const [Posts, setPosts] = useState([]);
  const [ForumData, setForumData] = useState<ForumData>();
  const [IsUserSubbedtoforum, setIsUserSubbedtoforum] = useState<boolean>(false);
  const [IsUserLoggedin, setIsUserLoggedin] = useState<boolean>(false);
  const {isOpen, toggle} = useModal();
  const Path = window.location.pathname;
  const ForumNameURLFriendlyFromPath = Path.replace("/forum/", "");
  useEffect(() => {
    axios.get(`http://localhost:5000/api/v1/Forum-endpoint/Get-forum-by-url/${ForumNameURLFriendlyFromPath}`)
      .then((response) => {
        setForumData(response.data);
        console.log(ForumData)
        axios.get(`http://localhost:5000/api/v1/Post-endpoint/Get-posts-ByForumUUID/${response.data.ForumUUID}`)
          .then((response) => {
            setPosts(response.data);
            console.log(Posts)
          })
          .catch((error) => {
            console.log(error);
          });
        for (let i = 0; i < User.ForumsSubbedTo.length; i++) {
          if (User.ForumsSubbedTo[i] === ForumData?.ForumUUID) {
            setIsUserSubbedtoforum(true);
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
    if (User.IsUserLoggedin) {
      setIsUserLoggedin(true);
    }
  }, []);
  return (
    <>
      <div className="p-6">
        <div className="flex flex-col max-w-md min-w-[28] gap-2 p-6 rounded-md shadow-md dark:dark:bg-gray-900 dark:dark:text-gray-100">
          <h2 className="text-xl font-semibold leading-tight tracking-wide">{ForumData?.ForumName}</h2>
          <p className="flex-1 dark:dark:text-gray-400">{ForumData?.ForumDescription}</p>
          <div className="flex flex-col justify-between gap-6 mt-6 sm:flex-row">
            <button className="px-6 py-2 rounded-sm shadow-sm dark:dark:bg-violet-400 dark:dark:text-gray-900" onClick={toggle}>Create Post</button>
          </div>
        </div>
      </div>
     {isOpen? <Createpost isOpen={isOpen} toggle={toggle}  /> : null}
    </>
  )

}
