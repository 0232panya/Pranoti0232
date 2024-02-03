
import { Route, Routes, useParams } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header.js';
import Home from './Components/Home/Home.js';
import { useEffect, useState } from 'react';
import ImagePage from './Components/ImagePage/ImagePage';
import axios from 'axios'
import ProfessionalPage from './Components/ProfessionalPage/ProfessionalPage.js';
import LogIn from './Components/Form/LogIn.js';
import SignUp from './Components/Form/SignUp.js';
import StoreLocation from './Components/Store_Location/StoreLocation.js';
import PriceCalculator from './Components/Price_Calculator/PriceCalculator.js';
import LogInPopUp from './Components/Login_PopUp/LogInPopUp.js';


function App() {

  // --- FOR JSON API.
  const [image, setImage] = useState([]);

  //--- FOR IMAGE API.
  const [result, setResult] = useState([]);

 
  // 

  useEffect(()=>{
    fetch('designImg.json')
      .then((res) => res.json())
      .then((res) => {
        setImage(res);  
        console.log(res)      
      })
  },[]);

  
  const { cardName } = useParams();

  useEffect(()=>{
      axios.get(`https://api.unsplash.com/search/photos?page=1&query=${cardName}&client_id=${process.env.REACT_APP_UNSPLASH_KEY}`)
      .then((response) =>{
          setResult(response.data.results);
          console.log(response);
      })
  },[cardName])




  return (
    
    <div className='app'>
      
      
      <Header image={image} result={result} />
     
      <Routes> 
        <Route path='/Header' element={<Header />} />
       
        <Route path='/' element={<Home image={image}  />}  />
        
        <Route path='/:cardName' element={<ImagePage image={image} result={result} />} />

        <Route Path="/Store_Location" element={<StoreLocation />} />

        <Route path='/popup-login' element={<LogInPopUp /> } />

        <Route path='/interior_design_near_me' element={<ProfessionalPage />} />

        <Route path='/Price_Calculate' element={<PriceCalculator />} />

        <Route path='/Login' element={<LogIn />} />

        <Route path='/SignUp' element={<SignUp />} />

        <Route path='/Footer' element={<Footer/>} />

      </Routes>

      <Footer/>
     
    </div>
  );

}

export default App;
