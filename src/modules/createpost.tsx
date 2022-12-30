import axios from 'axios';
import React, { useState, useEffect, ReactNode } from 'react'
import ReactDOM from 'react-dom'
interface CreateforumModal {
  isOpen: boolean;
  children?: ReactNode;
  ForumUUID: any;
  ForumName: any;
  AuthorUUID: any;
  AuthorName: any;
  toggle: () => void;
}
const Createpost = (props: CreateforumModal) => {
  const [isDomready, setisDomready] = useState<boolean>(false);
  const [postTitle, setpostTitle] = useState<string>('');
  const [postContent, setpostContent] = useState<string>('');
  const [posturl, setpostUrl] = useState<string>('');
  const HandleSubmitAddNewPost = (event: React.MouseEvent<HTMLButtonElement>) => {
    //to do
    //add some checks for length of title and content
    axios.post('http://localhost:5000/api/v1/Post-endpoint/Create-new-post', {
      PostTitle: postTitle,
      PostContent: postContent,
      PostAuthor: props.AuthorName,
      PostAuthorUUID: props.AuthorUUID,
      ForumUUID: props.ForumUUID,
      ForumName: props.ForumName,
      PostURL: posturl
    })
  }
  useEffect(() => {
    setpostTitle('');
    setpostContent('');
    setisDomready(true);
  }, [1])
  return ReactDOM.createPortal(
    <>
      {isDomready ?
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full dark:bg-gray-900 dark:text-gray-100 outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Create a new post in {props.ForumName}</h3>
                  <button className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={props.toggle} >
                    <span className="bg-transparent dark:text-gray-100  h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form>
                    <label className="text-xl font-semibold leading-tight tracking-wide">Post Title</label>
                    <input id="PostTitle" type="text" placeholder="Post Title" value={postTitle} onChange={(e)=> setpostTitle(e.target.value)} className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                    <label className="text-xl font-semibold leading-tight tracking-wide">Post Content</label>
                    <textarea id="PostContent" placeholder="PostContent" value={postContent} onChange={(e)=> setpostContent(e.target.value)} className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"></textarea>
                  </form>
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <div className="flex flex-col justify-between gap-6 mt-1 sm:flex-row">
                      <button className="px-6 py-2 rounded-sm shadow-sm dark:bg-red-400 dark:text-gray-900" onClick={props.toggle}>Cancel</button>
                      <button className="px-6 py-2 rounded-sm shadow-sm dark:bg-violet-400 dark:text-gray-900" onSubmit={HandleSubmitAddNewPost}>Create Post</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </> :
        null}
    </>,
    document.getElementById('CreatePostModal')!
  )
}
export default Createpost;