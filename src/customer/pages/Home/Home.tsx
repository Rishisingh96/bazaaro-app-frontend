import React from 'react'
import ElectricCategory from './ElectricCategory/ElectricCategory'
import CategoryGrid from './CategoryGrid/CategoryGrid'
import Deal from './Deal/Deal'
import ShopByCategory from './ShopByCategory/ShopByCategory'

const Home = () =>{
    return(
        <>
            <div >
                <ElectricCategory />
                <CategoryGrid />
               

                <div className='pt-20'>
                    <h1 className='text-lg lg:text-4xl font-bold text-primary-color pb-5 lg:pd-20'>TODY'S DEAL</h1>
                    <Deal />
                </div>

                <div className='pt-20'>
                    <h1 className='text-lg:lg-bold text-primary-color pb-5 lg:pb text-center'>SHOP BY CATEGORY</h1>
                     <ShopByCategory />
                </div>

                {/* <section>
                    <img src="" alt="" />
                </section> */}
               
            </div>
        </>
    )
}

export default Home