
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header.js';
//import Form from './Components/Form/Form.js';
import Home from './Components/Home/Home.js';

function App() {

  return (
    
    <div className='app'>
      {/* <Form/> */}
      <Header/>
      {/* <Home/> */}
      <Footer/>
      {/* <Routes>
        <Route path='/' element={<Header/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/' element={<Footer/>} />
      </Routes> */}
    </div>
  );
}

export default App;
