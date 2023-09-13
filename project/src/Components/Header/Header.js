

import "./Header.css";
import List from "../CardList/List";
import { useState } from "react";

function Header(){

    const [flag, setFlag] = useState(true);   

    return(
        <>
            <div className="header">
                <div className="left">
                    <div className="star">
                        <img src='https://interiors.co.za/wp-content/uploads/2020/05/Interiors-logo-mobile-retina.png' alt=""/>
                    </div>
                    <div className="navbar">
                        <ul>
                            <li><a href="./#" onClick={() => setFlag(!flag)}>Design Ideas <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down rotate" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                </svg></a>
                                {flag ? <List /> : ""}
                                </li>
                                
                            <li><a href="./#">Find Professional <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                </svg></a></li>
                            <li><a href="./#">Advice <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                </svg></a></li>
                        </ul>
                        <div className="searchBar">
                            <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                    </svg>
                            </button>
                            <input type="text" placeholder="Search Design" />
                            
                        </div>
                    </div>
                </div>
               
                <div className="right">
                    
                    {/* <div className="btn"> */}
                        <button className="btn-btn">SignIn</button>
                        <button className="btn-call" path="../Footer.js">Contact Us</button>
                    {/* </div> */}
                </div>
            </div>
        </>
    );
}
export default Header;