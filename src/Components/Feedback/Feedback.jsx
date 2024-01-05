import Slider from "react-slick";

import { FeedbackCard } from "./FeedbackCard";


export const Feedback = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
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
        <div className='w-full bg-white py-32'>
        <div className='max-w-7xl px-5 mx-auto'>
            <div className='py-4'>
                <p className='py-3 text-2xl md:text-6xl'>Student <span className='text-[#20B486]'>Feedback</span></p>
                <p className='text-xl text-[#85b2e6]'>Various versions have evolved over the years, sometimes by accident,</p>
            </div>

                <Slider {...settings} className='px-5'>
                    <FeedbackCard />
                    <FeedbackCard />
                    <FeedbackCard />
                </Slider>
            </div>

        </div>
    )
}
