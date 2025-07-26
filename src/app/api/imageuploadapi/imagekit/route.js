// import { NextResponse } from 'next/server'
// import ImageKit from 'imagekit';

// const imagekit = new ImageKit({
//   publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
//   privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
//   urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
// });


// export async function GET() {
//   const authParams = imagekit.getAuthenticationParameters();
//   return NextResponse.json(authParams);
// }



// import { NextResponse } from 'next/server';
// import ImageKit from 'imagekit';

// // ✅ Use server-side env variables (not NEXT_PUBLIC)
// const imagekit = new ImageKit({
//   publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY,
//   privateKey: process.env.IMAGEKIT_PRIVATE_KEY, // Use secure variable!
//   urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT,
// })

// export async function GET() {
//   const authParams = imagekit.getAuthenticationParameters();
//   return NextResponse.json(authParams);
// }



// import { NextResponse } from 'next/server';
// import ImageKit from 'imagekit';

// const imagekit = new ImageKit({
//   publicKey: process.env.IMAGEKIT_PUBLIC_KEY, // Use secure var
//   privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
//   urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
// });

// export async function GET() {
//   const authParams = imagekit.getAuthenticationParameters();
//   return NextResponse.json(authParams);
// }
