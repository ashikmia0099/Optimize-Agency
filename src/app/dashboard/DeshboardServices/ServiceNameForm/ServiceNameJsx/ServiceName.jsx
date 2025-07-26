'use client'
import Swal from 'sweetalert2';
import { useAuth } from '../../../../../../context/AuthContext';
import { useState } from 'react';

function ServiceName() {


    const { allCategoryService, setallCategoryService } = useAuth()
    const [selectedCategory, setSelectedCategory] = useState(null);

    console.log(allCategoryService)



    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const CategoryName = form.get('categoryType');
        const ServiceName = form.get('ServiceName');

        const postedData = {
            Category_Name: CategoryName,
            Service_Name: ServiceName,
            
        };

        try {
            const response = await fetch("https://optimize-agency.vercel.app/api/sarviceapi/AllServiceNameForm", {
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
                    title: 'Service Name Added Successfully.',
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
            <h1 className='text-4xl font-semibold uppercase text-center border-b pb-6 text-white'>Create Service Name</h1>
            <form onSubmit={handleFormSubmit}>
                <fieldset className="fieldset pt-2">
                    <legend className="fieldset-legend text-lg font-semibold pt-5">Select Category Name</legend>
                    <select
                        name='categoryType'
                        onChange={(e) => {
                            const category = allCategoryService.find(cat => cat.Category_Name === e.target.value)
                            setSelectedCategory(category);
                        }}
                        defaultValue="Select Categroy"
                        className="select w-full text-white">
                        {Array.isArray(allCategoryService) && allCategoryService.map(cat => (
                            <option key={cat._id} value={cat.Category_Name} className=' text-white'>
                                {cat.Category_Name}
                            </option>
                        ))}


                    </select>
                    <legend className="fieldset-legend text-lg font-semibold pt-5">Service Name</legend>
                    <input
                        type="text"
                        name='ServiceName'
                        className="input w-full text-white"
                        placeholder="Service Name"
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
    )
}

export default ServiceName