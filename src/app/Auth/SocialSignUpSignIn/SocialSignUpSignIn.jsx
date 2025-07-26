import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { FcGoogle } from 'react-icons/fc'

function SocialSignUpSignIn() {
    return (

        <div className=' grid grid-cols-3 flex gap-3 py-6'>
            <button className=' btn shadow-2xs text-4xl  w-full h-16 bg-[#9EFF00]'><FcGoogle /></button>
            <button className=' btn shadow-2xs text-4xl  w-full h-16 bg-[#9EFF00] text-black'><FaXTwitter /></button>
            <button className=' btn shadow-2xs text-4xl  w-full h-16 bg-[#9EFF00] text-[#0765FE]'><FaFacebook /></button>

        </div>
    )
}

export default SocialSignUpSignIn