import { StarRating } from "./StarRating";


export const Card = ({ course }) => {
    return (
        <div className="bg-white drop-shadow-md overflow-hidden rounded-2xl mr-2 my-5" >
            <img src={course.linkImg} alt="blog1" className="h-40 w-full object-cover" />

            <div className="p-5 border border-b">
                <h1 className="py-2 truncate">{course.title}</h1>
                <StarRating rating={course.rating} />
            </div>

            <h3 className="p-5">{course.price}</h3>

            <div className="absolute top-0 bg-white m-3 px-2 py-[2.5px] font-bold rounded">
                HTML
            </div>
        </div>
    )
}
