import React from 'react';
import './HomePage.css';


/* components *////
import HomeNavbar from '../../../components/Navbar/HomeNavbar/HomeNavbar';
import Searchbar from '../../../components/Navbar/HomeNavbar/SerachBar/Searchbar';
import Services from '../../../components/services/HomeService/services';
import Faq from '../../../components/Faq';
import MainFooter from '../../../components/Footer/foot'

import { Margin } from '@mui/icons-material';

const Home = () => {
  return (
    


  <div className="w-[100%] flex justify-center">
    <div class="m-0 flex w-[100%] bg-red-700 md:w-[100%] md:flex md:bg-red-600  md:justify-center  ">
      
      <div class="mr-0 h-[230px] w-[100%] md:w-[100%] md:h-[250px] md:content-center">
        
            <img src="https://img.freepik.com/premium-photo/empty-warehouse-storage-distribution-centers_41470-4881.jpg?w=2000" alt="" className="h-full  md:w-[100%] md:h-full md:object-cover md:object-center" />
  
            <div className="bg-opacity-50 h-[230px] bg-gray-600 absolute inset-0 md:absolute md:inset-0 md:bg-gray-600 md:bg-opacity-50 md:pointer-events-none md:h-[250px] ">
            </div>
  
        
      </div>
      
      <div className="absolute block justify-center ">
          <div className="w-[100vw] md:w-[80vw] md:h-full md:min-h-[2950px] md:bg-transparent md:box-border md:shadow-none md:rounded-lg md:flex md:flex-col justify-self-center">
  
            <div className='md:w-[100%]'>
  
              <HomeNavbar />
  
            </div>
        
            {/* Main content */}
              <div className=" flex flex-col text-[#333] text-center md:flex md:flex-col md:text-[#333] mt-[20px] md:text-center md:items-center md:mt-[30px]">
                <h1 class="mt-[10px] mb-[10px] text-[20px] font-extrabold text-white  md:mt-[10px] md:mb-[10px] md:text-[30px] md:font-extrabold md:text-white md:w-[500px]">Company-Name</h1>
                <Searchbar/>
          
              </div>
  
            <div class="md:mt-[40px] md:shadow-md">
            <Services  />
            </div>
  
  
            {/* Overlay Div */}
            <div >
              <Faq/>
            </div>
          
          </div>
         <div className="md:w-[100vw]">
          <MainFooter/>
         </div>
                 
      
        </div> 
      </div>
  </div>
    
    
  );
};

export default Home;
