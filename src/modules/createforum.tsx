import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Createforum: React.FC = () => {
  let navigate = useNavigate();
  const User = useSelector((state: any) => state.user.value);
  //User inputs to create a forum 
  const [ForumName, setForumName] = useState("");
  const [ForumDescription, setForumDescription] = useState("");
  //inputs from other areas of the app
  const [ForumOwner, setForumOwner] = useState("");
  const [ForumOwnerUUID, setForumOwnerUUID] = useState("");
  const [ForumNameURLFriendly, setForumNameURLFriendly] = useState("");
  //Boolean values
  const [isuserLoggedin, setisuserLoggedin] = useState(false);
  const [isForumNameValid, setisForumNameValid] = useState(true);
  const [isForumDescriptionValid, setisForumDescriptionValid] = useState(true);
  useEffect(() => {
    if (User.IsUserLoggedin) {
      setisuserLoggedin(true);
      setForumOwner(User.Username);
      let UUID = User.UserUUID;
      setForumOwnerUUID(UUID);
    }

  })
  const onSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if(ForumName.length > 20){
      alert("Forum name is too long")
      setisForumNameValid(false);
    }
    if(ForumDescription.length > 200){
      alert("Forum description is too long")
      setisForumDescriptionValid(false);
    }
    if(ForumName.length == 0 ){
      alert("Forum name is oo short")
      setisForumNameValid(false);
      
    }
    if(ForumDescription.length == 0){
      alert("Forum description is too short")
      setisForumDescriptionValid(false);
    }
    if(ForumName.includes(" ")){
      let urlVer = ForumName.replace(" ", "-");
      setForumNameURLFriendly(urlVer);
    }else{
      setForumNameURLFriendly(ForumName);
    }
    if(isForumNameValid && isForumDescriptionValid){
      //send to api
      axios.post("http://localhost:5000/api/v1/forum-endpoint/Create-new-forum", {
        ForumName: ForumName,
        ForumDescription: ForumDescription,
        ForumOwner: ForumOwner,
        ForumOwnerUUID: ForumOwnerUUID,
        ForumNameURLFriendly: ForumNameURLFriendly
      })
      .then(function (response) {
        console.log(response);
        navigate(`/forum/${ForumNameURLFriendly}`);
      }
      )
      .catch(function (error) {
        console.log(error);
      });
    }
  }
  return (
    <>
      {isuserLoggedin ? (
        <div className="bg-grey-lighter h-4/5 pt-56  flex columns overflow-hidden">
          <div className="container max-w-sm mx-auto flex 1 flex-col items-center justify-center px-2">
            <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
              <h1 className="mb-8 text-3x1 text-center">Create a forum</h1>
              <form>
                <label>Forum Name</label>
                <input
                  type="text"
                  value={ForumName}
                  onChange={(e) => setForumName(e.target.value)}
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                />
                <label>Forum Description</label>
                <input
                  type="text"
                  value={ForumDescription}
                  onChange={(e) => setForumDescription(e.target.value)}
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                />
                <button
                  type="submit"
                  onClick={onSubmit}
                  disabled={isForumNameValid && isForumDescriptionValid ? false : true}
                  className="w-full px-4 py-2 font-bold text-white dark:dark:bg-gray-800 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                >Create Forum</button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div> You need to be logged in to create a forum</div>
        </>
      )};
    </>
  )
}
export default Createforum;
