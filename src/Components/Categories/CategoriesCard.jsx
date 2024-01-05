import { FaPenNib } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";


export const CategoriesCard = () => {
    return (
        <div className='bg-white p-4 shadow-lg rounded-md flex justify-between border border-transparent hover:border-[#20B486] hover:cursor-pointer'>
            <div className="flex gap-4">
                <FaPenNib
                    size={30}
                />
                <p className="text-2xl font-semibold">Design</p>
            </div>
            <FaLocationArrow size={30} style={{ color: "#20B486" }} />

        </div>
    )
}
