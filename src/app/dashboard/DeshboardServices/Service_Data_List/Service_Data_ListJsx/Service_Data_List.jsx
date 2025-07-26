import React from 'react'
import { FaEdit } from 'react-icons/fa'
import { MdDeleteForever } from 'react-icons/md'
import { ImPlus } from "react-icons/im";
import Link from 'next/link';

function AllService() {
    return (
        <div>
            <div className='m-10 px-10 py-10 border border-[#9EFF00] rounded-2xl'>
                <div className='border-b pb-6 flex items-center justify-between'>
                    <div>
                        <h1 className='text-2xl font-semibold capitalize  text-white'> Service Data List</h1>
                    </div>
                    <div>
                        <Link href={'/dashboard/DeshboardServices/ServiceNameForm'}>
                            <h1 className='text-xl font-semibold capitalize text-black btn bg-[#9EFF00] rounded-xl' >
                                <span>Add Service Data</span>
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

                                <th className=' text-center'>Index</th>
                                <th className=' text-center'>Blog Title</th>
                                <th className=' text-center'>Blog Category</th>
                                <th className=' text-center'>Author Name</th>
                                <th className=' text-center'>Update</th>
                                <th className=' text-center'>Delete</th>


                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}

                            <tr >
                                <td className="font-bold text-center text-white">
                                    1
                                </td>
                                <td className="font-bold text-center text-white">
                                    Blog name
                                </td>
                                <td className="text-center text-white">
                                    categroy
                                </td>
                                <td className="text-center text-white">
                                    author
                                </td>
                                <td className="text-center"><FaEdit className=' text-3xl text-[#9EFF00] text-center' /></td>
                                <td className="text-center"><MdDeleteForever className=' text-3xl text-red-500 text-center' /></td>

                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    )
}

export default AllService