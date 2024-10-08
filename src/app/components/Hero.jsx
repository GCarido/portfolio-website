"use client";
import React from 'react'
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="text-white mb-4 lg:text-6xl sm:text-5xl text-4xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-yellow-400">Hello, I'm </span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                'Name Lname',
                                1000,
                                'a Web Dev',
                                1000,
                                'a Backend Dev',
                                1000,
                                'a Test Test',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
                    </p>
                    <div className="grid gap-3 sm:flex sm:gap-0">
                        <button className="px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-black w-full sm:w-fit">Test Tes</button>
                        <button className="px-6 py-3 rounded-full mr-4 bg-transparent hover:bg-slate-800 text-white border border-white w-full sm:w-fit">Download CV</button>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                        <Image
                            src="/images/photo-placeholder.png"
                            alt="hero image"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero