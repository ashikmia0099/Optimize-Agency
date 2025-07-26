'use client';

import React from 'react';
import Swal from 'sweetalert2';

function BlogCategroy() {
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const CategoryName = form.get('CategoryName');

        const postedData = {
            Category_Name: CategoryName
        };

        try {
            const response = await fetch("https://optimize-agency.vercel.app/api/blogsapi/blogCategoryApi", {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(postedData)
            });

            const res = await response.json();

            if (res.insertedId) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Category Added Successfully.',
                    showConfirmButton: false,
                    timer: 1500
                });
                e.target.reset();
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
            <h1 className='text-4xl font-semibold uppercase text-center border-b pb-6'>Create Blog Category</h1>
            <form onSubmit={handleFormSubmit}>
                <fieldset className="fieldset pt-2">
                    <legend className="fieldset-legend text-lg font-semibold pt-5">Category Name</legend>
                    <input 
                        type="text" 
                        name='CategoryName' 
                        className="input w-full" 
                        placeholder="Category Name" 
                        required 
                    />

                    <div className='mt-6'>
                        <button 
                            type="submit" 
                            className='btn w-full shadow-2xs rounded-full bg-[#9EFF00] text-lg text-black'
                        >
                            Submit
                        </button>
                    </div>
                </fieldset>
            </form>
        </div>
    );
}

export default BlogCategroy;
