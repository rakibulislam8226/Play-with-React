import { Card } from './Card';

import React from 'react';
import Slider from "react-slick";

import { courses } from "../data/Courses"


export const Courses = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='w-full bg-[#e9f8f3b3] py-32'>
            <div className='max-w-7xl px-5 mx-auto'>
                <div className='py-4'>
                    <p className='py-3 text-6xl'>Most Popular <span className='text-[#20B486]'>Courses</span></p>
                    <p className='text-xl text-[#85b2e6]'>Various versions have evolved over the years, sometimes by accident,</p>
                </div>

                <Slider {...settings} className='px-5'>
                    {courses.map((course, i) =>
                        <div key={i}>
                            <Card course={course} />
                        </div>)}
                </Slider>
            </div>

        </div>
    )
}
