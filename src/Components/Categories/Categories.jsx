import React from 'react'
import { CategoriesCard } from './CategoriesCard'

export const Categories = () => {
    return (
        <div className='w-full bg-[#e9f8f3b3] py-32'>
            <div className='max-w-7xl px-5 mx-auto'>
                <div className='py-4'>
                    <p className='py-3 text-6xl'>Most Popular <span className='text-[#20B486]'>Courses</span></p>
                    <p className='text-xl text-[#85b2e6]'>Various versions have evolved over the years, sometimes by accident,</p>
                    <div className='grid md:grid-cols-2 lg:grid-cols-4 p-8 gap-4'>
                        <CategoriesCard />
                        <CategoriesCard />
                        <CategoriesCard />
                        <CategoriesCard />

                        <CategoriesCard />
                        <CategoriesCard />
                        <CategoriesCard />
                        <CategoriesCard />
                    </div>
                </div>
            </div>
        </div>
    )
}
