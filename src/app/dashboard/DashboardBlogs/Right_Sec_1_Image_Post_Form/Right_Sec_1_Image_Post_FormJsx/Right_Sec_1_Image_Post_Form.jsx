'use client'


import React, { useState } from 'react'
import { TiPlus } from 'react-icons/ti';
import Swal from 'sweetalert2';
import { useAuth } from '../../../../../../context/AuthContext';
import uploadToImgBB from '@/app/ImageUploadSite/UploadImageBBImage';



function Right_Sec_1_Image_Post_Form() {






  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);



    const BlogImageFile = form.get('blogimage');
    const BlogImage = BlogImageFile ? await uploadToImgBB(BlogImageFile) : '';

    

    const blogsData = {
      BlogImage
    };

    try {
      const response = await fetch("http://localhost:3000/api/blogsapi/Right_Sec_1_Image_Post_api", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(blogsData),
      });

      const res = await response.json();

      if (res.insertedId) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Image Post Successfully Added!',
          showConfirmButton: false,
          timer: 1500
        });
        // e.target.reset();
        
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Something went wrong.',
          icon: 'error',
          confirmButtonText: 'Try again'
        });
      }
    } catch (error) {
      Swal.fire({
        title: 'Network Error!',
        text: error.message,
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };


  return (
    <div className='m-10 px-10 py-10 border border-[#9EFF00] rounded-2xl'>
      <h1 className='text-4xl font-semibold uppercase text-center border-b pb-6'>Right Section 1 : Image Post Form</h1>
      <form onSubmit={handleFormSubmit}>
        <fieldset className="fieldset pt-2">
          
            <div>
              <legend className="text-lg font-semibold pt-5">Blog Image</legend>
              <input type="file" name='blogimage' className="file-input w-full" required />
            </div>
  
          <button type="submit" className='btn w-full bg-[#9EFF00] border-none text-black mt-10 text-lg font-semibold'>
            Submit Blog Post
          </button>
        </fieldset>
      </form>
    </div>
  )
}

export default Right_Sec_1_Image_Post_Form