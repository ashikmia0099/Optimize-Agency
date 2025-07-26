'use client'
import React from 'react'
import Swal from 'sweetalert2';

function AllProcessTitleTextForm() {


    const handlePorcessTitleandTextForm = async (e) =>{
        e.preventDefault();

        const form = new FormData(e.target);
        const Title = form.get("TitleName")
        const Description = form.get("description")
        const ButtonText = form.get("buttonText")


        console.log(Title, Description, ButtonText)


        const  processdata = {
            Title,
            Description,
            ButtonText,
            
        };

        try {
            const response = await fetch("https://optimize-agency.vercel.app/api/processapi/AllProcessTitleTextapi", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(processdata),
            });

            const res = await response.json();

            if (res.insertedId) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Process Post Successfully Added!',
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
    }


    return (
        <div className='m-10 px-10 py-10 border border-[#9EFF00] rounded-2xl'>
            <h1 className='text-4xl font-semibold uppercase text-center border-b pb-6'>Create Process Title And Text</h1>
            <form onSubmit={handlePorcessTitleandTextForm}>
                <fieldset className="fieldset pt-2">
                    <legend className="fieldset-legend text-lg font-semibold pt-5">Title Name</legend>
                    <input type="text" name='TitleName' className="input w-full" placeholder="Title Name" required />

                    <legend className="fieldset-legend text-lg font-semibold pt-5">Description  <span className=' text-[10px]'>(Max-40 word)</span> </legend>
                    <textarea name='description' className="textarea w-full" placeholder="Description" rows={12} required ></textarea>


                    <legend className="fieldset-legend text-lg font-semibold pt-5">Button Text</legend>
                    <input type="text" name='buttonText' className="input w-full" placeholder="Button text" required />


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

export default AllProcessTitleTextForm