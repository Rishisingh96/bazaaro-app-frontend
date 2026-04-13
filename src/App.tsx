import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import Navbar from './customer/Navbar/Navbar';
import Home from './customer/pages/Home/Home';
import customeTheme from './Theme/customeTheme';
import Deal from './customer/pages/Home/Deal/Deal';
import Product from './customer/pages/Products/Product';

function App() {
  return (
      <ThemeProvider theme={customeTheme}>
        <div>
          <Navbar />
          {/* <Home /> */}
          <Product />
      </div>
      </ThemeProvider>
  )

}

export default App;



  {/* //  <div>
  //   <h1 className='text-4xl text-center font-bold text-red-500'>Hello Rishi !</h1>

  //   <Button variant="contained">Rishi tha button</Button>
  // {/* //  <Button variant="contained">Rishi tha button</Button> */}
  // <AddShoppingCartIcon color="primary" fontSize="large" />
  //  </div>
  // ); */}