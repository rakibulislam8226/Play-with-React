import achivementLogo from "../../assets/achievement.png";
import { achivements } from "../../data/Achivement";
import { AchivementCard } from './AchivementCard';


export const Achivement = () => {
    const lastFourAchivements = achivements.slice(-4); // last four achivements for an array

    return (
        <div className='w-full bg-white py-32'>
            <div className='max-w-7xl px-5 flex flex-col md:flex-row m-auto items-center justify-center' >
                <div className='m-3'>
                    <h2 className='text-3xl lg:text-6xl'>Our <span className='text-[#20B486]'>Achievement</span></h2>
                    <p className='text-[#6D737A] py-3 mb-12'>Various versions have evolved over the years, sometimes by accident,</p>
                    <div className='grid grid-cols-2 gap-4'>

                        {lastFourAchivements.map((achivement, i) =>
                            <div key={i}>
                                <AchivementCard achivement={achivement} />
                            </div>)
                        }

                    </div>
                </div>
                <img src={achivementLogo} alt="achivement" className='order-last' />

            </div>
        </div>
    )
}
