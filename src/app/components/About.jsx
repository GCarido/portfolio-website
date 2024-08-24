"use client";
import React, { useTransition, useState, startTransition } from 'react';
import Image from 'next/image';
import TabButton from "./TabButton";

const tabContent = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>Skills Sample1</li>
                <li>Skills Sample2</li>
                <li>Skills Sample3</li>
                <li>Skills Sample4</li>
                <li>Skills Sample5</li>
                <li>Skills Sample6</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Education Sample1</li>
                <li>Education Sample2</li>
                <li>Education Sample3</li>
                <li>Education Sample4</li>
                <li>Education Sample5</li>
            </ul>
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className="list-disc pl-2">
                <li>Experience Sample1</li>
                <li>Experience Sample2</li>
                <li>Experience Sample3</li>
                <li>Experience Sample4</li>
                <li>Experience Sample5</li>
            </ul>
        )
    }
];


const About = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="text-white bg-blue-900">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image src="/images/about-section.png" width={500} height={500} />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base lg:text-lg ">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
                    </p>
                    <div className="flex flex-row mt-8">
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >
                            Skills
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}
                        >
                            Education
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("experience")}
                            active={tab === "experience"}
                        >
                            Experience
                        </TabButton>
                    </div>
                    <div className="mt-8">{tabContent.find(t => t.id === tab).content}</div>
                </div>
            </div>
        </section>
    )
}

export default About