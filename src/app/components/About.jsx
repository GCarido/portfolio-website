import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section className="text-white">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <Image src="/images/about-section.png" width={500} height={500} />
        </div>
    </section>
  )
}

export default About