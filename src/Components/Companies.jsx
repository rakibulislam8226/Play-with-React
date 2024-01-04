import adroll from '../assets/adroll.png';
import segment from '../assets/segment.png';
import sendgrid from '../assets/sendgrid.png';
import toast from '../assets/toast.png';

export const Companies = () => {
    return (
        <div className='w-full bg-white py-[50px]'>
            <div className='lg:max-w-screen-2xl max-w-[600px] m-auto'>
                <p className='font-bold text-[#536E96] text-center'>Trusted by over 25,000 teams around the world.</p>
                <p className='text-[#536E96] font-Inter text-center py-3'>Leading companies use the same courses to help employees keep their skills fresh.</p>
                <div className='flex justify-center md:gap-8 py-2'>
                    <img src={adroll} alt="adroll" />
                    <img src={segment} alt="segment" />
                    <img src={sendgrid} alt="sendgrid" />
                    <img src={toast} alt="toast" />
                </div>


            </div>
        </div>
    )
}
