// 'use client'

// import React from 'react'
// import Lottie from "lottie-react";
// import signimsignpuLotty from '../../../../public/images/LottyJson/SignInAndSignUpLotty.json'


// function Authfiles() {
//   return (
//     <div className="">
//       <div className=" h-[600px]">
//         <Lottie animationData={signimsignpuLotty} loop={true} className=' h-[550px]'  />
//       </div>
//     </div>
//   )
// }

// export default Authfiles



'use client'

import dynamic from 'next/dynamic';
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

import signimsignpuLotty from '../../../../public/images/LottyJson/SignInAndSignUpLotty.json'

function Authfiles() {
  return (
    <div className="">
      <div className="h-[600px]">
        <Lottie animationData={signimsignpuLotty} loop={true} className='h-[550px]' />
      </div>
    </div>
  );
}

export default Authfiles;
