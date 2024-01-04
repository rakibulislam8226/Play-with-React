import { AiOutlineSearch } from 'react-icons/ai'

import hero from '../assets/hero.png'

export const Hero = () => {
    return (
        <div className='w-full bg-white py-24'>
            <div className='lg:max-w-screen-2xl max-w-[600px] m-auto px-4 grid lg:grid-cols-2'>
                <div className='flex flex-col justify-start gap-4'>
                    <p className='text-[#20B486] text-2xl font-medium py-2'>START TO SUCCESS</p>
                    <h1 className='md:text-6xl font-Jost py-2 md:leading-[72px]'>Access To <span className='text-[#20B486]'>5000+</span> Courses from <span className='text-[#20B486]'>300</span> Instructors & Institutions</h1>
                    <p className='text-sm text-gray-400 py-3'>Various versions have evolved over the years, sometimes by accident</p>

                    <form className='max-w-[700px] p-4 shadow-lg rounded-md flex justify-between'>
                        <input className='' type="text" placeholder='What do want to learn?' />
                        <button>
                            <AiOutlineSearch
                                size={20}
                                className='icon'
                                style={{ color: '#000' }}
                            />
                        </button>
                    </form>

                </div>
                <img className='order-first lg:order-last' src={hero} alt="hero" />

            </div>
            

        </div>
    )
}
