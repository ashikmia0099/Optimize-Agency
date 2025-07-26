'use client'

import Swal from "sweetalert2";



function PhoneEmailForm() {

  
  const handleForm = async (e) =>{
    e.preventDefault();

    const form = new FormData(e.target);
    const Email = form.get("email")
    const Phone_Number = form.get("phonenumber")
  

    console.log(Email, Phone_Number)


    const  data = {
      Email,
      Phone_Number,
        
        
    };

    try {
        const response = await fetch("https://optimize-agency.vercel.app/api/contactusapi/phoneEamilForm", {
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
      <h1 className='text-4xl font-semibold uppercase text-center border-b pb-6'>Email And Phone Number Form</h1>
      <form onSubmit={handleForm}>
        <fieldset className="fieldset pt-2">
          <legend className="fieldset-legend text-lg font-semibold pt-5">Email </legend>
          <input type="text" name='email' className="input w-full" placeholder="Email" required />
          <legend className="fieldset-legend text-lg font-semibold pt-5">Phone Number </legend>
          <input type="text" name='phonenumber' className="input w-full" placeholder="Phone Number" required />

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

export default PhoneEmailForm