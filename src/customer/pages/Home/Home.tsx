import React from 'react'
import ElectricCategory from './ElectricCategory/ElectricCategory'
import CategoryGrid from './CategoryGrid/CategoryGrid'
import Deal from './Deal/Deal'
import ShopByCategory from './ShopByCategory/ShopByCategory'
import { Button } from '@mui/material'
import { Storefront } from '@mui/icons-material'

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

                <section className='lg:px-20 relative h-[200px] lg:h-[450px] object-cover'>
                    <img className='w-full h-full' src="https://imgs.search.brave.com/TvZzevZbtHocmdDdNNeqP7X2cXfPX2XX04KhtoXcLXU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMDgv/MTk4LzU2NC9zbWFs/bC9zdXBlci1zYWxl/LXBvc3Rlci1iYW5u/ZXItYmlnLXNhbGUt/Y2xlYXJhbmNlLWls/bHVzdHJhdGlvbi12/ZWN0b3IuanBn" alt="" />

                    <div className='absolute top-1/2 left-4 lg:left-[15rem] transform-translate-y-1/2 font-semibold lg:text-4xl space-y-3 '>
                        <h1>Sell your Product</h1>
                        <p className='text-lg md:text-2xl'>With <span className='logo'>Rishi singh </span> </p>
                        <div className='pt-6 flex justify-center'>
                            <Button startIcon={<Storefront/>} variant='contained' size='large'>
                                Become Seller
                            </Button>
                        </div>
                        
                    </div>

                </section>
               
            </div>
        </>
    )
}

export default Home