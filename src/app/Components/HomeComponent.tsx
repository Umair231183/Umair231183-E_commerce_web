import React from 'react'
import Image from 'next/image'

function HomeComponent() {
  return (
    <div>
       <div className="relative w-full h-screen  ">
          {/* Background Image */}
          <Image
            // src="/images/bg_image.jpg"
            src="/images/sm_bg.jpg"
            alt="Background"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
    </div>
    </div>
  );
}

export default HomeComponent;