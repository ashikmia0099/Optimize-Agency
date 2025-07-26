'use client'
import { useState } from 'react';
import { useAuth } from '../../../../../../context/AuthContext';
import Swal from 'sweetalert2';
import uploadToImgBB from '@/app/ImageUploadSite/UploadImageBBImage';


function ServiceData() {

    const { allServiceName, setServiceName } = useAuth()
    const [selectedServiceData, setSelectedServiceData] = useState(null);

    console.log(allServiceName)

    
      

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const SelectService = form.get('servicename');
    const ServiceiconsFiles = form.get('serviceicons');
    const ServiceImage = ServiceiconsFiles ? await uploadToImgBB(ServiceiconsFiles) : '';
    const ServiceSummery = form.get('serviceSummery');

  
    const blogsData = {
        SelectService,
        ServiceImage,
        ServiceSummery,
      
    };

    try {
      const response = await fetch("https://optimize-agency.vercel.app/api/sarviceapi/ServiceAllDataForm", {
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
            <h1 className='text-4xl font-semibold uppercase text-center border-b pb-6'>Create Service Data</h1>
            <form onSubmit={handleFormSubmit}>

                <div>
                    <legend className="fieldset-legend text-lg font-semibold pt-5">Select Service Name</legend>
                    <select
                        name='servicename'
                        onChange={(e) => {
                            const service = allServiceName.find(serviceName => serviceName.Service_Name === e.target.value)
                            setSelectedServiceData(service);
                        }}
                        defaultValue="Select Categroy"
                        className="select w-full">
                        {Array.isArray(allServiceName) && allServiceName.map(serviceName => (
                            <option key={serviceName._id} value={serviceName.Service_Name}>
                                {serviceName.Service_Name}
                            </option>
                        ))}


                    </select>
                </div>



                <legend className="fieldset-legend text-lg font-semibold pt-5">Service Data Icons</legend>
                <input type="file" name='serviceicons' className="file-input w-full" />


                <legend className="fieldset-legend text-lg font-semibold pt-5">Service Summery Text <span className=' text-[12px]'>(max 8 word)</span></legend>
                <textarea name='serviceSummery' className="textarea w-full" placeholder="Description" rows={4} ></textarea>




                <div className='mt-6'>
                    <button
                        type="submit"
                        className='btn w-full shadow-2xs rounded-full bg-[#9EFF00] text-lg text-black'
                    >
                        Submit
                    </button>
                </div>

            </form>
        </div>
    )
}

export default ServiceData