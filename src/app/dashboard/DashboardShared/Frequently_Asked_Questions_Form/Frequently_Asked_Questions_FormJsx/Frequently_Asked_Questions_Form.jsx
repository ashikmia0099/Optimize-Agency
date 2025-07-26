'use client'
import React from 'react'
import Swal from 'sweetalert2';

function Frequently_Asked_Questions_Form() {

    
        const handleForm = async (e) =>{
          e.preventDefault();
      
          const form = new FormData(e.target);
          const Question_Title = form.get("QuestionTitle")
          const Question_Answer = form.get("QuestionAnswer")
          
      
          console.log(Question_Title,)
      
      
          const  data = {
            Question_Title,
            Question_Answer
              
              
          };
      
          try {
              const response = await fetch("https://optimize-agency.vercel.app/api/sharedquestionapi", {
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
    <h1 className='text-4xl font-semibold uppercase text-center border-b pb-6'>Frequently Asked Questions Form</h1>
    <form onSubmit={handleForm}>
      <fieldset className="fieldset pt-2">
        <legend className="fieldset-legend text-lg font-semibold pt-5">Question Title </legend>
        <input type="text" name='QuestionTitle' className="input w-full" placeholder="Question Title" required />
        <legend className="fieldset-legend text-lg font-semibold pt-5">Question Answer </legend>
        
        <textarea className="textarea w-full" name='QuestionAnswer' placeholder="Question Answer" required rows={12}></textarea>
        
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

export default Frequently_Asked_Questions_Form