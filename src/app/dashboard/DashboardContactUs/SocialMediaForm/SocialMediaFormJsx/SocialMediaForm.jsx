'use client'
import React from 'react'
import Swal from 'sweetalert2';

function SocialMediaForm() {


  const handleForm = async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const Facebook_Link = form.get("Facebook_Link")
    const Twitter_Link = form.get("Twitter_Link")
    const Linkedin_Link = form.get("Linkedin_Link")


    console.log(Facebook_Link,Twitter_Link,Linkedin_Link)


    const data = {
      Facebook_Link,
      Twitter_Link,
      Linkedin_Link


    };

    try {
      const response = await fetch("https://optimize-agency.vercel.app/api/contactusapi/contactussocialLink", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const res = await response.json();

      if (res.insertedId) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: ' Data Post Successfully Added!',
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
      <h1 className='text-4xl font-semibold uppercase text-center border-b pb-6'>Social Media Link</h1>
      <form onSubmit={handleForm}>
        <fieldset className="fieldset pt-2">
          <legend className="fieldset-legend text-lg font-semibold pt-5">Facebook Link  </legend>
          <input type="url" name='Facebook_Link' className="input w-full" placeholder="Facebook Link" required />
          <legend className="fieldset-legend text-lg font-semibold pt-5">Twitter Link </legend>
          <input type="url" name='Twitter_Link' className="input w-full" placeholder="Twitter Link" required />
          <legend className="fieldset-legend text-lg font-semibold pt-5">Linkedin Link </legend>
          <input type="url" name='Linkedin_Link' className="input w-full" placeholder="Linkedin Link" required />

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

export default SocialMediaForm