import { Avatar, Box, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { AddShoppingCart, FavoriteBorder, Storefront } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CategorySheet from './CategorySheet';
import { homeCategory } from '../../data/homeCategory';
import { useState } from 'react';

const Navbar = () => {
    const theme = useTheme();
    const isLarge: boolean = useMediaQuery(theme.breakpoints.up('lg'));
    const [selectedCategory, setSelectedCategory] = useState("men");
    const [showCategorySheet, setShowCategorySheet] = useState(false);

    return (
        <>
            <Box className="sticky top-0 left-0 right-0 bg-white" sx={{zIndex:2}}>
                    <div className='flex items-center justify-between px-5 lg:px-20 h-[75%] boarder-b'>
                       <div className='flex items-center gap-9'>
                         <div className='flex items-center gap-2'>
                            
                            {!isLarge && <IconButton>
                                <MenuIcon />
                            </IconButton>}
                            <h1 className='logo cursor-pointer text-lg md:text-2xl text-primary-color'>Bazzaro-App
                            </h1>
                        </div>
                        <ul className='flex items-center font-medium text-gray-800'>
                            {
                            // ['Men','Women','Home & furniture','Electronics']
                            homeCategory.map((item) => 
                                <li 
                                onMouseLeave={()=>{
                                    setShowCategorySheet(false);
                                }}
                                onMouseEnter={()=>{
                                    setShowCategorySheet(true);
                                   if(item.categoryId){
                                    setSelectedCategory(item.categoryId);
                                   }
                                }}
                                className='mainCategory hover:text-primary-color hover:border-b-2 h-[75px] px-4 border-primary-color flex items-center'>
                                    {item.name}
                                </li>
                            )}
                        </ul>
                       </div>

                        <div className='flex gap-1 lg:gap-6 items-center'>
                            <IconButton>
                                <SearchIcon />
                            </IconButton>
                            {
                                true ? <Button className='flex items-center gap-2'>
                                    <Avatar   // this is use for User profile picture
                                    sx={{width:28,height:28}}
                                    src='https://images.pexels.com/photos/752802/pexels-photo-752802.jpeg'
                                    />
                                    <h1 className='font-semibold hidden lg:block'>Rishi</h1>
                                </Button>:<Button variant='contained'>Login</Button>
                            }

                            {/* this is use for wish list */}
                            <IconButton>
                                <FavoriteBorder sx={{fontSize:29}}/>  
                            </IconButton>

                              <IconButton>
                                <AddShoppingCart className='text-gray-700' sx={{fontSize:29}}/>  
                            </IconButton>

                            {isLarge && <Button startIcon={<Storefront/>} variant = 'outlined'>
                                Become Seller
                            </Button>}
                        </div>
                    </div>
                    

                     { showCategorySheet && <div  
                   
                    onMouseLeave={() => setShowCategorySheet(false)}
                    onMouseEnter={()=> setShowCategorySheet(true)}
                                   
                    
                    className='categorySheet absolute top-[4.41rem] left-20 right-20 border'>
                        <CategorySheet selectedCategory={selectedCategory}/>
                    </div>}
            </Box>
        </>
    );
};

export default Navbar;