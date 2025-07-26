
"use client"; 

import React from 'react';
import TopSection from './BlogsJsx/TopSection/TopSection';
import WithAuth from '../../../../lib/WithAuth';

function Page() {
  return (
    <div>
      <TopSection />
    </div>
  );
}

// export default WithAuth(Page);  this is private route case use
 
export default Page;
