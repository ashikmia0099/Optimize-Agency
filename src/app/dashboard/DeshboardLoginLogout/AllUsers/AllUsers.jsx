import React from 'react'
import { FaEdit } from "react-icons/fa";

import { MdDeleteForever } from 'react-icons/md'

function AllUser() {
  return (
    <div className='m-10 px-10 py-10 border border-[#9EFF00] rounded-2xl'>
      <h1 className='text-4xl font-semibold uppercase text-center border-b pb-6'>All Users </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>

              <th>ID</th>
              <th>User Name</th>
              <th>User Email</th>
              <th>User Phone</th>
              <th>User Status</th>
              <th>Delete User</th>


            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>

              <td className="font-bold">
                <th>1</th>
              </td>
              <td className="font-bold">
                Ashik Khan
              </td>
              <td>
                ashik@gmail.com
              </td>
              <td>01403226133</td>
              <td>Admin</td>
              <td><MdDeleteForever className=' text-3xl text-red-500' /></td>

            </tr>


          </tbody>

        </table>
      </div>
    </div>
  )
}

export default AllUser