import avater from '../../assets/avatar.png';
import quotationMark from "../../assets/quotationMark.png";

export const FeedbackCard = () => {
    return (
        <div className="rounded-3xl md:p-8 shadow-xl my-6 mx-2">
            <div className="flex justify-between">
                <div className='flex gap-4'>
                    <img src={avater} alt="avatar" />
                    <div>
                        <p>Jenny Wilson</p>
                        <h3>UI-UX Designer</h3>
                    </div>
                </div>
                <img src={quotationMark} alt="quotationMark" className='h-8' />
            </div>
            <div className='py-8'>
                <p className='text-xl'>Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.  Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst.</p>
            </div>


        </div>
    )
}
