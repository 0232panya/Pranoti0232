
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

  //let consta = "62syaA0W_UwaoHXITba8GwmPkFnbXHH0yNYtI8RILwI";

   //const URL = "https://api.unsplash.com/search/photos?page=1&query=interior_design&client_id=${process.env.REACT_APP_UNSPLASH_KEY}";

  // useEffect(()=>{
  //   fetch(`https://api.unsplash.com/search/photos?page=1&query=interior_design&client_id=${process.env.REACT_APP_UNSPLASH_KEY}`)
  //     .then((result) => result.json())
  //     .then((result) => {
  //       setPhotos(result);
  //       console.log(photos);        
  //     });
  // },[]);


  return (
    
    <div className='app'>
      {/* <Form/> */}
      
      
      <Header image={image} result={result} />
      {/* <Home image={image}/> */}
      {/* <ImagePage /> */}
      {/* <ProfessionalPage image={image} /> */}
     
      <Routes> 
        <Route path='/Header' element={<Header />} />
       
        <Route path='/' element={<Home image={image} />}  />
        
        <Route path='/:cardName' element={<ImagePage image={image} result={result} />} />

        <Route path='/Professional_Page' element={<ProfessionalPage />} />

        <Route path='/Login' element={<LogIn />} />

        <Route path='/SignUp' element={<SignUp />} />

        <Route path='/Footer' element={<Footer/>} />

      </Routes>

      <Footer/>
     
    </div>
  );

}

export default App;
