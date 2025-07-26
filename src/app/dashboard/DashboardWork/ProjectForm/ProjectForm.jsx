'use client'


import { useState } from 'react';
import { useAuth } from '../../../../../context/AuthContext';
import { TiPlus } from 'react-icons/ti';
import uploadToImgBB from '@/app/ImageUploadSite/UploadImageBBImage';
import Swal from 'sweetalert2';

function ProjectForm() {



    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData(e.target);

        const Project_Type_Name = form.get('ProjectTypeName');
        const Project_Name = form.get('ProjectName');
        const Project_Descripton = form.get('Projectdescripton');
        const Project_Live_Link = form.get('ProjectLiveLink');
       
        const ProjectImageFile = form.get('ProjectImage');
        const Project_Image = ProjectImageFile ? await uploadToImgBB(ProjectImageFile) : '';

        
        const blogsData = {
            Project_Type_Name,
            Project_Name,
            Project_Descripton,
            Project_Live_Link,
            Project_Image,
           
        };

        try {
            const response = await fetch("https://optimize-agency.vercel.app/api/workapi/workprojectapi", {
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
            <h1 className='text-4xl font-semibold uppercase text-center border-b pb-6'>Work Project Post Form</h1>
            <form onSubmit={handleFormSubmit}>
              

                    <div>
                        <legend className="text-lg font-semibold pt-5">Project Type Name</legend>
                        <input type="text" name='ProjectTypeName' placeholder=' Project Type Name' className="input w-full" required />

                    </div>
                    <div>
                        <legend className="text-lg font-semibold pt-5">Project Name</legend>
                        <input type="text" name='ProjectName' placeholder=' Project Name' className="input w-full" required />

                    </div>

                    <legend className="text-lg font-semibold pt-5">Project Descripton <span className=' text-[12px]'>(max 25 -30 word)</span></legend>
                    <textarea className="textarea w-full" placeholder=' Project Descripton Name' name="Projectdescripton" rows={12}></textarea>


                    
                        <div>
                            <legend className="text-lg font-semibold pt-5">Project Live Link</legend>
                            <input type="url" name='ProjectLiveLink'  className="input w-full" placeholder="Project Live Link" required />
                        </div>
                        <div>
                            <legend className="text-lg font-semibold pt-5">Project Image</legend>
                            <input type="file" name='ProjectImage' placeholder='Project Live Link' className="file-input w-full" required />
                        </div>
                  
                    

                    
                    <button type="submit" className='btn w-full bg-[#9EFF00] border-none text-black mt-10 text-lg font-semibold'>
                        Submit Blog Post
                    </button>
               
            </form>
        </div>
    )
}

export default ProjectForm