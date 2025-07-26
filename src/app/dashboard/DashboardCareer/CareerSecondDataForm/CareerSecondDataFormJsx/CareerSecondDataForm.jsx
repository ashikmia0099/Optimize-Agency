'use client'

import Swal from 'sweetalert2';
import { useAuth } from '../../../../../../context/AuthContext';
import { useEffect, useState } from 'react';
import uploadToImgBB from '@/app/ImageUploadSite/UploadImageBBImage';


function CareerSecondDataForm() {

  const { careerAllcategory, setcareerAllcategory } = useAuth()
  const [selectedCategory, setSelectedCategory] = useState(null);

  // fetch all Service name api 

  useEffect(() => {

    fetch("https://optimize-agency.vercel.app/api/careerapi/CareerSecondDataCategoryFormapi")
      .then(res => res.json())
      .then(data => {
        setcareerAllcategory(data)

      })


  }, [])

  console.log(careerAllcategory)
  
 




  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const Select_Career_Category = form.get('categorytype');
    const Technology_Name = form.get('technologyName');
    const TechnologyiconsFiles = form.get('technologyImage');
    const Technology_Image = TechnologyiconsFiles ? await uploadToImgBB(TechnologyiconsFiles) : '';
    const Description = form.get('description');


    const blogsData = {
      Select_Career_Category,
      Technology_Name,
      Technology_Image,
      Description
    };

    try {
      const response = await fetch("https://optimize-agency.vercel.app/api/careerapi/CareerSecondDataFormapi", {
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
      <h1 className='text-4xl font-semibold uppercase text-center border-b pb-6'>Career Second Data Form</h1>
      <form onSubmit={handleFormSubmit}>
        <fieldset className="fieldset pt-2">



          <div>
            <legend className="text-lg font-semibold pt-5">Select Career Category</legend>
            <select
              name="categorytype"
              onChange={(e) => {
                const category = careerAllcategory.find(cat => cat.CategoryName === e.target.value);
                setSelectedCategory(category);
              }}
              defaultValue=""
              className="select w-full"
            >
              <option disabled value="">Choose Category Name</option>
              {Array.isArray(careerAllcategory) && careerAllcategory.map(cat => (
                <option key={cat._id}>{cat.CategoryName}</option>
              ))}
            </select>
          </div>

          <div className='grid grid-cols-2 gap-3'>
            <div>
              <legend className="text-lg font-semibold pt-5">Technology Name</legend>
              <input type="text" name='technologyName' className="input w-full" placeholder="Technology Name" required />
            </div>
            <div>
              <legend className="text-lg font-semibold pt-5">Technology Image</legend>
              <input type="file" name='technologyImage' className="file-input w-full" required />
            </div>
          </div>
          <div className='py-10 pb-16'>
            <div>
              <legend className="text-lg font-semibold pt-5">Description <span>(max 25 word)</span></legend>
              <textarea className="textarea w-full" name='description' placeholder="Description" rows={12} required></textarea>
            </div>
          </div>

          <button type="submit" className='btn w-full bg-[#9EFF00] border-none text-black mt-10 text-lg font-semibold'>
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  )
}

export default CareerSecondDataForm