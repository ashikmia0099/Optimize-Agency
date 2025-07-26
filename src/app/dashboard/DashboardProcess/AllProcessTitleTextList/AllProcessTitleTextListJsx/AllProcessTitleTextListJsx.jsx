'use client'

import { useEffect } from 'react';
import { useAuth } from '../../../../../../context/AuthContext';
import { FaEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';

function AllProcessTitleTextListJsx() {


    
        const { Allprocesstitletext, setAllprocesstitletext } = useAuth();
    
        useEffect(() => {
    
            fetch("http://localhost:3000/api/processapi/AllProcessTitleTextapi")
                .then(res => res.json())
                .then(data => {
                    setAllprocesstitletext(data)
    
                })
    
    
        }, [])
    
        console.log(Allprocesstitletext)
    


    return (
        <div>
            <div className='m-10 px-10 py-10 border border-[#9EFF00] rounded-2xl'>
                <h1 className='text-4xl font-semibold uppercase text-center border-b pb-6'>All Process List</h1>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>

                                <th className=' text-center'>Index</th>
                                <th className=' text-center'>Process Title</th>
                                <th className=' text-center'>Process Description</th>
                                <th className=' text-center'>Button Text</th>
                                <th className=' text-center'>Update</th>
                                <th className=' text-center'>Delete</th>


                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}

                            {
                                Allprocesstitletext.map((process, index) => <tr key={process._id} >
                                    <td className="font-bold text-center">
                                        {index + 1}
                                    </td>
                                    <td className="font-bold text-center">
                                        {process.Title}
                                    </td>
                                    <td className="text-center">
                                        {process.Description ? process.Description.split(" ").slice(0, 5).join(" ") + "..." : "No description"}
                                    </td>
                                    <td className="text-center">
                                        {process.ButtonText ? process.ButtonText.split(" ").slice(0, 5).join(" ") + "..." : "No Button Text"}
                                    </td>


                                    <td className="text-center"><FaEdit className=' text-3xl text-[#9EFF00] text-center' /></td>
                                    <td className="text-center"><MdDeleteForever className=' text-3xl text-red-500 text-center' /></td>

                                </tr>)
                            }




                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    )
}

export default AllProcessTitleTextListJsx