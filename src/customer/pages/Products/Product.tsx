import { Box, IconButton, useMediaQuery, useTheme } from "@mui/material"
import FilterSection from "./FilterSection"
import ProductCard from "./ProductCard"
import { FilterAlt } from "@mui/icons-material";


const Product = () => {
  const theam = useTheme();
  const isLarge = useMediaQuery(theam.breakpoints.up('lg'));
  return (
    <div className="-z-10 mt-10">
      <div >
        <h1 className="text-3xl text-center font-bold text-gray-700 pb-5 px-9 uppercase space-x-2">Women Saries</h1>
      </div>

      <div className="lg:flex">
        <section className="filter_section hidden lg:block w-[20%]">
          <FilterSection />
        </section>

        <div className= "w-full lg:w-[80%] space-y-5 ">
          <div className="">
            <div>
              {
                !isLarge && (<IconButton>
                    <FilterAlt />
                </IconButton> )
              }
                {
                !isLarge && (<Box>
                    <FilterSection />
                </Box> )
          
              }
            </div>
            
          </div>
         <section className="product_section">
          <ProductCard />
        </section>
        </div>
      


      </div>
    </div>
  )
}

export default Product
