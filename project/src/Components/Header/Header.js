

import { useRef, useState } from "react";
import "./Header.css";
import { Link, Outlet, useParams } from "react-router-dom";
// import LogIn from "../Form/LogIn";


function Header({image, result}){

    const [navBar, setNavBar] = useState(false);
    const [input, setInput] = useState("");

    // LOGIN STATE
    // const [login, setLogin] = useState(false);
    const login = false;

    // 
    const [click, setClick] = useState(false);

    const handleClick = () => setClick (!click);

    const showNavBar=() =>{
       
        if(window.scrollY >= 70){
            setNavBar(true);
        }else{
            setNavBar(false);
        }
    }

    window.addEventListener("scroll",showNavBar)

    const searchInput = useRef();

    function handleChange(e){
       setInput(e.target.value);
    //    console.log(cardName.filter(f => f.cardName.toLowerCase()))
    }

    // function rotateBtn(){
    //     SetShow(show => !show); 
    // }

    // let rotateToggleBtn = show ? " active" : "";

    
    return(
        <>
            <div className={navBar ? "navBar active" : "navBar"}>
                
                <div className="left">
                    <div className="star">
                        <Link to={"/"} >
                            <img src='https://interiors.co.za/wp-content/uploads/2020/05/Interiors-logo-mobile-retina.png' alt=""/>
                        </Link>
                    </div>

                    <div className="navbar">
                        
                        {/* ---------------- PHOTOS ------------------------- */}
                            <div class="dropdown">
                            <a class="btn btn-dropdown" href="/#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                Photos&nbsp;
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16" >
                                    <path  fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </a>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink" onClick={handleClick}>
                                   {
                                    image.map((img,key)=>(
                                        <div key={key}>
                                                    <Link to={`${img.cardName}`} onClick={() => setClick(false)} className="li-link">
                                                    <li className="dropdown-li">
                                                    {img.cardName}
                                                    </li>
                                                    </Link>
                                                    {/* </li> */}
                                            {/* </Link> */}
                                        </div>
                                    ))
                                   }
                                </ul>
                                <Outlet />
                            </div>
                                
                                {/* -------------------- STORE -------------------------------- */}
                            <div class="dropdown">                                    
                                <Link to={"/interior_design_near_me"} className="link">
                                    <p>
                                        Store
                                    </p>
                                </Link>
                            </div>


                          {/* **************************** CREATE NEW COMPONANT FOR THIS **************************  */}
                          {/* ----------------- PRICE CALCULATORE -------------------- */}
                            <div class="dropdown">
                                {/* <Link to={"/PriceCalulator"}className="link"> */}
                                    <a href="/" className="link">
                                    <p>Price Calculator</p>    
                                    </a>                                     
                                {/* </Link>                                */}
                            </div>

                       
                       {/* ----------------------- SEARCH BAR --------------------------- */}
                    <div className="searchBar">
                        <div>
                            <button className="s-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                    </svg>
                            </button>
                            <input type="search" placeholder="Search Design" value={input} onChange={(e) => handleChange(e)} ref={searchInput} />
                        </div>
                        <div className="serachbar_List">
                            
                            {
                                image.filter((item)=>{
                                    const searchTerm = input.toLowerCase();
                                    const cardName = item.cardName.toLowerCase();

                                    return searchTerm && cardName.startsWith(searchTerm);
                                }).map((i) =>(
                                    <div onClick={() => setInput("")}><Link to={`${i.cardName}`}>{i.cardName}</Link></div>
                                ))
                            }
                            
                        </div>
                    </div>


                </div>
            </div>


                {/* -------------------------  RIGHT SIDE ------------------------- */}

               
               {/* ---------------------- SIGNUP / SIGNIN DROPDOWN PAGE ------------------ */}
                <div className="right">                  
                   
                   <div className="dropdown">
                        {/* <button className="btn login-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 14 14">
                                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                </svg>
                        </button> */}
                        <a class="btn btn-dropdown" href="/#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16" style={{color: "rgb(88, 88, 88)"}}>
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                            </svg> 
                        </a>
                        <ul className="dropdown-menu">
                            {
                               login ? <div>
                                login
                               </div> 
                               : <div>
                                        <li className="dropdown-li"><Link to={"SignUp"} className="btn-call">
                                            <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                                            </svg>
                                            Sign Up / Log In
                                            </p>
                                            </Link>
                                        </li>
                                </div>
                            }
                        </ul>
                    </div>
                </div>
            </div>

    </>
    );
}
export default Header;