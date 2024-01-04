import { AiOutlineSearch } from 'react-icons/ai'

import hero from '../assets/hero.png'

export const Hero = () => {
    return (
        <div className='w-full bg-white py-16'>
            <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px] px-4 md:px-0 lg:px-4'>
                <div className=''>
                    <p className='text-[#20B486] text-2xl font-medium py-2'>START TO SUCCESS</p>
                    <h1 className='md:text-4xl xl:text-6xl font-Jost py-2 '>Access To <span className='text-[#20B486]'>5000+</span> Courses from <span className='text-[#20B486]'>300</span> Instructors & Institutions</h1>
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
