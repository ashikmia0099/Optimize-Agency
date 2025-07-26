'use client'


import { useState } from 'react';


import Swal from 'sweetalert2';
import uploadToImgBB from '@/app/ImageUploadSite/UploadImageBBImage';
import { useAuth } from '../../../../../../context/AuthContext';


function SharedFooterHero() {


    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData(e.target);

        const Title = form.get('title');
        const Descripton = form.get('Descripton');
        const Button_Word_1 = form.get('buttonword1');
        const Button_Word_2  = form.get('buttonword2');

        const ImageFile = form.get('Image');
        const Project_Image = ImageFile ? await uploadToImgBB(ImageFile) : '';


        const blogsData = {
            Title,
            Descripton,
            Button_Word_1,
            Button_Word_2,
            Project_Image,

        };

        try {
            const response = await fetch("http://localhost:3000/api/sharedfooterheroapi", {
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
            <h1 className='text-4xl font-semibold uppercase text-center border-b pb-6'>Shared Footer Hero Form</h1>
            <form onSubmit={handleFormSubmit}>


                <div>
                    <legend className="text-lg font-semibold pt-5">Title <span>(max 12 word)</span></legend>
                    <input type="text" name='title' placeholder=' Title' className="input w-full" required />

                </div>

                <legend className="text-lg font-semibold pt-5"> Descripton <span className=' text-[12px]'>(max 40 word)</span></legend>
                <textarea className="textarea w-full" placeholder='  Descripton ' name="Descripton" rows={12}></textarea>

                <div>
                    <legend className="text-lg font-semibold pt-5">Button Word 1 <span>(max 3 word)</span></legend>
                    <input type="text" name='buttonword1' placeholder='Button Word 1' className="input w-full" required />
                </div>

                <div>
                    <legend className="text-lg font-semibold pt-5">Button Word 2 <span>(max 12 word)</span></legend>
                    <input type="text" name='buttonword2' placeholder='Button Word 2' className="input w-full" required />
                </div>

                <div>
                    <legend className="text-lg font-semibold pt-5"> Image</legend>
                    <input type="file" name='Image' className="file-input w-full" required />
                </div>




                <button type="submit" className='btn w-full bg-[#9EFF00] border-none text-black mt-10 text-lg font-semibold'>
                    Submit Blog Post
                </button>

            </form>
        </div>
    )
}

export default SharedFooterHero