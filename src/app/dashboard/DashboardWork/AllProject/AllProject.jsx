import React from 'react'
import { FaEdit } from 'react-icons/fa'
import { MdDelete, MdDeleteForever } from 'react-icons/md'

function AllProject() {
    return (
        <div>
            <div className='m-10 px-10 py-10 border border-[#9EFF00] rounded-2xl'>
                <h1 className='text-4xl font-semibold uppercase text-center border-b pb-6'>All Service List</h1>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>

                                <th className=' text-center'>Index</th>
                                <th className=' text-center'>Project Title</th>
                                
                                <th className=' text-center'>Update</th>
                                <th className=' text-center'>Delete</th>


                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}

                            <tr >
                                <td className="font-bold text-center">
                                    1
                                </td>
                                <td className="font-bold text-center">
                                    Project Title name
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

export default AllProject