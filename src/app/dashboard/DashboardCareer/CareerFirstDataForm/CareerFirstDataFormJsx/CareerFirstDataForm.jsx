'use client'
import React from 'react'
import Swal from 'sweetalert2';

function CareerFirstDataForm() {


  const handleCareerFirstDataForm = async (e) => {
          e.preventDefault();
  
          const form = new FormData(e.target);
          const Title = form.get("TitleName")
          const Description = form.get("description")
  
  
          console.log(Title, Description)
  
  
          const processdata = {
              Title,
              Description,
  
  
  
          };
  
          try {
              const response = await fetch("https://optimize-agency.vercel.app/api/careerapi/CareerFirstDataFormapi", {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(processdata),
              });
  
              const res = await response.json();
  
              if (res.insertedId) {
                  Swal.fire({
                      position: 'top-end',
                      icon: 'success',
                      title: 'Career Data Post Successfully Added!',
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
            <h1 className='text-4xl font-semibold uppercase text-center border-b pb-6'>Create First Data Form</h1>
            <form onSubmit={handleCareerFirstDataForm}>
                <fieldset className="fieldset pt-2">
                    <legend className="fieldset-legend text-lg font-semibold pt-5">Title Name <span className=' text-[12px]'>(max-5 word)</span></legend>
                    <input type="text" name='TitleName' className="input w-full" placeholder="Title Name" required />

                    <legend className="fieldset-legend text-lg font-semibold pt-5">Description <span className=' text-[12px]'>(max-50 word)</span></legend>
                    <textarea name='description' className="textarea w-full" placeholder="Description" rows={12} required></textarea>

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

export default CareerFirstDataForm