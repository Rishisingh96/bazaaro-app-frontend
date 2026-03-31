import { Avatar, Box, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { AddShoppingCart, FavoriteBorder } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Navbar = () => {
    const theme = useTheme();
    const isLarge: boolean = useMediaQuery(theme.breakpoints.up('lg'));
    return (
        <>
            <Box>
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
                            {['Men','Women','Home & furniture','Electronics'].map((item) => (
                                <li key={item} className='mainCategory hover:text-primary-color hover:border-b-2 h-[75px] px-4 border-primary-color flex items-center'>
                                    {item}
                                </li>
                            ))}
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
                        </div>
                    </div>
            </Box>
        </>
    );
};

export default Navbar;