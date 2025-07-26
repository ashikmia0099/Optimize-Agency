'use client'

import React from 'react'
import { useAuth } from '../../../../../../context/AuthContext';
import Swal from 'sweetalert2';

function WorkTitleandDes() {

    
    
        const { blogallcategory, user } = useAuth();
    
    
    
        const handleFormSubmit = async (e) => {
            e.preventDefault();
            const form = new FormData(e.target);
    
            const Title_Name = form.get('TitleName');
            const Project_Descripton = form.get('ProjectDescripton');
            const Button_Text = form.get('ButtonText');
           
    
            const blogsData = {
                Title_Name,
                Project_Descripton,
                Button_Text,
                
    
            };
    
            try {
                const response = await fetch("https://optimize-agency.vercel.app/api/workapi/titleanddescripform", {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(blogsData),
                });
    
                const res = await response.json();
    
                if (res.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your Post Successfully Added!',
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
            <h1 className='text-4xl font-semibold uppercase text-center border-b pb-6'>Work Title and Description Post Form</h1>
            <form onSubmit={handleFormSubmit}>

                <div>
                    <legend className="text-lg font-semibold pt-5">Title Name</legend>
                    <input type="text" name='TitleName' placeholder=' Title Name' className="input w-full" required />

                </div>

                <legend className="text-lg font-semibold pt-5">Project Descripton <span className=' text-[12px]'>(max 40 word)</span></legend>
                <textarea className="textarea w-full" name='ProjectDescripton' placeholder="Project Descripton" rows={12} required></textarea>

                <div>
                    <legend className="text-lg font-semibold pt-5">Button Text</legend>
                    <input type="text" name='ButtonText' placeholder='ButtonText' className="input w-full" required />

                </div>

                <button type="submit" className='btn w-full bg-[#9EFF00] border-none text-black mt-10 text-lg font-semibold'>
                    Submit Blog Post
                </button>

            </form>
        </div>
  )
}

export default WorkTitleandDes