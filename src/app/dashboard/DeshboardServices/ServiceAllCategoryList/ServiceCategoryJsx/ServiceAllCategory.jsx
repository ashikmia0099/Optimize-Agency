import React from 'react'
import { FaEdit } from 'react-icons/fa'
import { MdDeleteForever } from 'react-icons/md'
import { ImPlus } from "react-icons/im";
import Link from 'next/link';


function ServiceAllCategory() {
    return (
        <div>
            <div className='m-10 px-10 py-10 border border-[#9EFF00] rounded-2xl'>
                <div className='border-b pb-6 flex items-center justify-between'>
                    <div>
                        <h1 className='text-2xl font-semibold capitalize  text-white'>All Service Category List</h1>
                    </div>
                    <div>
                        <Link href={'/dashboard/DeshboardServices/ServiceCategoryForm'}>
                            <h1 className='text-xl font-semibold capitalize text-black btn bg-[#9EFF00] rounded-xl' >
                                <span>Add Service Category</span>
                                <span className=' text-2xl'><ImPlus /></span>
                            </h1>
                        </Link>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>

                                <th className=' text-center text-white'>Index</th>
                                <th className=' text-center text-white'>Blog Title</th>
                                <th className=' text-center text-white'>Blog Category</th>
                                <th className=' text-center text-white'>Author Name</th>
                                <th className=' text-center text-white'>Update</th>
                                <th className=' text-center text-white'>Delete</th>


                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}

                            <tr >
                                <td className="font-bold text-center text-[#adb3b3]">
                                    1
                                </td>
                                <td className="font-bold text-center text-[#adb3b3]">
                                    Blog name
                                </td>
                                <td className="text-center text-[#adb3b3]">
                                    categroy
                                </td>
                                <td className="text-center text-[#adb3b3]">
                                    author
                                </td>
                                <td className="text-center  flex items-center justify-center"><FaEdit className=' text-3xl text-[#9EFF00] text-center' /></td>
                                <td className="text-center "><MdDeleteForever className=' text-3xl text-red-500 text-center flex items-center justify-center' /></td>

                            </tr>



                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    )
}

export default ServiceAllCategory