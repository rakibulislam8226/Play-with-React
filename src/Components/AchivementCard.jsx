import usertheme from "../assets/UsersThree.svg";

export const AchivementCard = ({ achivement }) => {
    return (
        <div className=''>
            <img src={usertheme} alt="graduationcap" />
            <div className='ml-3'>
                <p className='font-bold'>{achivement.total}</p>
                <p className='text-[#6D737A] text-sm'>{achivement.title}</p>
            </div>
        </div>
    )
}