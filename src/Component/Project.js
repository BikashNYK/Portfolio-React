import React from 'react';
import { IoLogoGithub } from 'react-icons/io5';
import { ProjectList } from './data';

const Project = () => {
    return (
        <div className="flex flex-wrap items-center justify-evenly my-24">
            {ProjectList.map((e, i) => (
                <section className="w-full sm:w-1/3 p-4" key={i}>
                    <div className="border border-zinc-800 rounded-md p-2 min-w-275px max-w-275px hover:border-zinc-600 duration-100 ease-in-out">
                        <p className="text-lg text-textBase font-medium uppercase text-center">{e.name}</p>
                        <img src={e.imageSrc} className="w-full h-full sm:h-64 object-cover rounded-md my-4" alt="" />
                        <div className="flex flex-1 items-center justify-between">
                            <p className="text-lg text-red-700">
                                Technologies
                                <span className="block text-sm text-red-400">{e.techs}</span>
                            </p>
                            <a href={e.github}>
                                <div>
                                    <IoLogoGithub className="text-textBase text-3xl" />
                                </div>
                            </a>
                        </div>
                    </div>
                </section>
            ))}
        </div>
    );
};

export default Project;
