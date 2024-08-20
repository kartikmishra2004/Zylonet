import React, { useState, useRef } from 'react';
import { useAuth } from '../storage/Auth';
import { toast } from 'react-toastify';
import loading from "../assets/loading.gif";
import HamMenu from "./HamMenu"
import NavShadow from "./NavShadow"

const CreatePost = () => {

  const { token } = useAuth();

  const [imageSrc, setImageSrc] = useState(null);
  const [selectFile, setSelectFile] = useState(null);
  const fileInputRef = useRef(null);
  const [post, setPost] = useState({
    title: "",
    caption: "",
  });
  const [isLodding, setIsLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImageSrc(null);
    setSelectFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };

  const handleChangePost = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPost({
      ...post,
      [name]: value,
    });
  }

  const handleSubmitPost = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    try {
      const formData = new FormData();
      formData.append('post', selectFile);
      formData.append('title', post.title);
      formData.append('caption', post.caption);
      const response = await fetch("http://localhost:8080/api/v1/post/createpost", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: formData,
      });
      const res_data = await response.json();
      if (response.ok) {
        toast.success("Uploaded successfully!!");
        setPost({
          title: "",
          caption: "",
        });
        removeImage();
        setIsLoading(false);
      } else {
        toast.error("Failed to post!!");
        setIsLoading(false);
      }
    } catch (error) {
      console.log("Failed to post!!")
    }
  }

  return (
    <div className='md:ml-[18rem]'>
      <NavShadow />
      <HamMenu />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-[black] mb-6">Create Post</h1>
        <form onSubmit={handleSubmitPost} className="grid grid-cols-1 gap-6">
          <div className="p-2">
            <input
              value={post.title}
              onChange={handleChangePost}
              type="text"
              id="title"
              name="title"
              placeholder="Title"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00b855] focus:ring-[#00b855] focus:ring-opacity-50 p-2"
              style={{ backgroundColor: "#f6f6f6" }} />
          </div>
          <div className={`p-2 relative w-full ${selectFile ? "flex" : "hidden"} justify-center`}>
            <div
              title='Remove image'
              className='absolute md:left-[65.5%] left-[77.5%] bg-[#00000034] hover:bg-[#fc3232a0] text-white rounded-full px-5 py-3 mt-2 transition-all duration-300 ease-in-out cursor-pointer'
              onClick={removeImage}>
              X
            </div>
            <img className='w-[30rem]' src={imageSrc || ''} alt="Selected" />
          </div>
          <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <textarea
                value={post.caption}
                onChange={handleChangePost}
                id="caption"
                name="caption"
                rows="3"
                placeholder="Description"
                className="block w-full md:h-48 h-[8rem] rounded-md resize-none border-gray-300 shadow-sm focus:border-[#00b855] focus:ring-[#00b855] focus:ring-opacity-50 p-2"
                style={{ backgroundColor: "#f6f6f6" }}
              ></textarea>
            </div>
            <div>
              <label
                htmlFor='example1'
                className="w-full md:h-48 h-[5rem] border-2 border-dashed border-gray-300 rounded-md cursor-pointer flex flex-col items-center justify-center bg-[#f6f6f6] hover:bg-gray-50">
                <div>
                  <label title='Upload profile' htmlFor="example1">
                    <div className='cursor-pointer pl-[30px]'>
                      <div className="mx-auto max-w-xs">
                        <label
                          htmlFor="example1"
                          className="mb-1 block text-sm font-medium text-gray-700">
                          Add media
                        </label>
                        <input
                          accept=".jpg, .jpeg, .png, .gif"
                          ref={fileInputRef}
                          onChange={handleImageChange}
                          name='image'
                          id="example1"
                          type="file"
                          className="mt-2 block w-full text-sm file:mr-4 file:rounded-md file:border-0 file:bg-[#00B855] file:py-2 file:px-4 file:text-sm file:font-semibold file:text-white hover:file:bg-[#22a45e] focus:outline-none disabled:pointer-events-none disabled:opacity-60" />
                      </div>
                    </div>
                  </label>
                </div>
              </label>
            </div>
          </div>
          <div className="col-span-full md:mt-6 p-2">
            <button
              disabled={isLodding ? true : false}
              type="submit"
              className="tracking-wide font-semibold bg-[#00B855] text-gray-100 w-[5rem] h-[2.8rem] px-5 py-2.5 rounded-lg hover:bg-[#22a45e] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">{isLodding ? (<img className='w-[30px] brightness-200' src={loading}></img>) : "Done"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
