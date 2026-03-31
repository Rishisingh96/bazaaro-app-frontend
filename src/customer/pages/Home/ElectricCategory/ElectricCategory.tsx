import React from 'react';
import ElectronicCategoryCard from '../ElectronicCategoryCard';


const ElectricCategory = () => {
    return (
        <div className='flex flex-wrap justify-between py-5
        lg:px-20 border-b'>
            {[1,1,1,1,1,1,1].map((item)=><ElectronicCategoryCard />)}
           
        </div>
    );
}

export default ElectricCategory;