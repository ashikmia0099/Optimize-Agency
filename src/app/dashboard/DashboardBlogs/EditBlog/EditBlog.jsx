
'use client'

import React, { useState } from 'react';
import { TiPlus } from "react-icons/ti";

function EditBlog() {


    const [increseDescripton, setincreseDescripton] = useState([]);

    const addSection = () => {
        setincreseDescripton(prev => [...prev, { id: Date.now() }]);
    };


    // handle form data


    const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);

        const AuthorName = form.get('authorname');
        const PassionName = form.get('passonename');
        const BlogTitle = form.get('blogtitle');
        const BlogImage = form.get('blogimage');

        // Static Section 1
        const DescriptionTitle = form.get('descriptiontitle');
        const DescriptionImage = form.get('descriptionimage');
        const Description = form.get('description');

        // Dynamic Sections
        const dynamicDescriptions = increseDescripton.map((section, index) => ({
            title: form.get(`descriptionTitle_${index}`),
            image: form.get(`descriptionImage_${index}`),
            text: form.get(`descriptionDescription_${index}`),
        }));

        // Example Output
        console.log({
            AuthorName,
            PassionName,
            BlogTitle,
            BlogImage,
            DescriptionTitle,
            DescriptionImage,
            Description,
            dynamicDescriptions, // 👈 Contains all dynamic sections
        });
    };



    return (
        <div className='m-10 px-10 py-10 border border-[#9EFF00] rounded-2xl'>
            <h1 className='text-4xl font-semibold uppercase text-center border-b pb-6'>Edit your Blog</h1>
            <form onSubmit={handleFormSubmit}>
                <fieldset className="fieldset pt-2">
                    {/* author name */}
                    <legend className="fieldset-legend text-lg font-semibold pt-5">Author Name</legend>
                    <input type="text" name='authorname' className="input w-full" placeholder="Author Name" required />
                    {/* passion name  */}
                    <legend className="fieldset-legend text-lg font-semibold pt-5">Passion Name</legend>
                    <input type="text" name='passonename' className="input w-full" placeholder="Passion Name" required />
                    {/* select blog catgory */}
                    <legend className="fieldset-legend text-lg font-semibold pt-5">Passion Name</legend>
                    <select defaultValue="Pick a browser" className="select">
                        <option disabled={true}>Pick a browser</option>
                        <option>Chrome</option>
                        <option>FireFox</option>
                        <option>Safari</option>
                    </select>

                    {/* blog title and image */}
                    <div className='grid grid-cols-2 gap-3'>
                        <div>
                            <legend className="fieldset-legend text-lg font-semibold pt-5">Blog Title</legend>
                            <input type="text" name='blogtitle' className="input w-full" placeholder="Blog Title" required />
                        </div>
                        <div>
                            <legend className="fieldset-legend text-lg font-semibold pt-5">Blog Image</legend>
                            <input type="file" name='blogimage' className="file-input w-full" required />
                        </div>
                    </div>
                    {/* increase and descripton */}
                    <div className='py-4 flex justify-between items-center'>
                        <h4 className='text-2xl font-semibold uppercase'>Increase Description</h4>
                        <button
                            type="button"
                            className='btn bg-[#9EFF00] border-none text-5xl font-semibold text-black'
                            onClick={addSection}
                        >
                            <TiPlus />
                        </button>
                    </div>
                    {/* default post section */}
                    <div className=' py-10 pb-16'>
                        <div>
                            <h4 className=' text-xl font-semibold btn bg-[#9EFF00] text-black rounded-full px-10' >Section 1</h4>
                        </div>
                        <div className='grid grid-cols-2 gap-3'>
                            <div>
                                <legend className="fieldset-legend text-lg font-semibold pt-5">Description Title</legend>
                                <input type="text" name='descriptiontitle' className="input w-full" placeholder="Description Title" required />
                            </div>
                            <div>
                                <legend className="fieldset-legend text-lg font-semibold pt-5">Description Image</legend>
                                <input type="file" name='descriptionimage' className="file-input w-full" />
                            </div>
                        </div>
                        <div>
                            <legend className="fieldset-legend text-lg font-semibold pt-5">Description</legend>
                            <textarea className="textarea w-full" name='description' placeholder="Description" rows={12} required></textarea>
                        </div>
                    </div>
                    {/* dynamic Descriptions Section */}
                    {increseDescripton.map((section, index) => (

                        <div key={section.id} className=' py-10 pb-16'>
                            <div>
                                <h4 className=' text-xl font-semibold btn bg-[#9EFF00] text-black rounded-full px-10' >Section {index + 2}</h4>
                            </div>
                            <div className='grid grid-cols-2 gap-3'>
                                <div>
                                    <legend className="fieldset-legend text-lg font-semibold pt-5">Description Title</legend>
                                    <input type="text" name={`descriptionTitle_${index}`} className="input w-full" placeholder="Description Title" required />
                                </div>
                                <div>
                                    <legend className="fieldset-legend text-lg font-semibold pt-5">Description Image</legend>
                                    <input type="file" name={`descriptionImage_${index}`} className="file-input w-full" />
                                </div>
                            </div>
                            <div>
                                <legend className="fieldset-legend text-lg font-semibold pt-5">Description</legend>
                                <textarea className="textarea w-full" name={`descriptionDescription_${index}`} placeholder="Description" rows={12} required></textarea>
                            </div>
                        </div>
                    ))}

                    <div className='mt-6'>
                        <button className='btn w-full shadow-2xs rounded-full bg-[#9EFF00] text-lg text-black'>
                            Submit
                        </button>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}

export default EditBlog