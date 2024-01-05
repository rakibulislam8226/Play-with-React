import ladyAchivement from '../assets/achivement_img.png';
import { AchivementCard } from './AchivementCard';
import { achivements } from "../data/Achivement";


export const Achivement = () => {
    return (
        <div className='w-full bg-white py-32'>
            <div className='max-w-7xl px-5 flex flex-col md:flex-row m-auto items-center justify-center' >
                <div className='m-3'>
                    <h2 className='text-3xl lg:text-6xl'>Our <span className='text-[#20B486]'>Achievement</span></h2>
                    <p className='text-[#6D737A] py-3 mb-12'>Various versions have evolved over the years, sometimes by accident,</p>
                    <div className='grid grid-cols-2 gap-4'>
                        
                        {achivements.map((achivement, i) =>
                            <div key={i}>
                                <AchivementCard achivement={achivement} />
                            </div>)
                        }

                    </div>
                </div>
                <img src={ladyAchivement} alt="achivement" className='max-w-80 h-[280px] justify-center m-auto bg-yellow-200 rounded-[50px]' />

            </div>
        </div>
    )
}
