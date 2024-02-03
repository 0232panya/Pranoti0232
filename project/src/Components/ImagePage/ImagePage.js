//import Cards from "../Card/Cards";
import "./ImagePage.css";

import { useState, useEffect } from "react";
import axios from 'axios';
import Cards from "../Card/Cards";
import { Link, useParams } from "react-router-dom";

function ImagePage(){

    const [result, setResult] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [isLoad, setIsLoad] = useState(false);
    const per_page = 28;

    //POP-UP BOX USESTATE 
    const [popUp, setPopUp] = useState([]);
    const [popUpToggle, setPopUpToggle] = useState(false);

    const { cardName } = useParams();


    useEffect(()=>{
        setIsLoad(true);
        axios.get(`https://api.unsplash.com/search/photos?page=${page}&per_page=${per_page}&query=${cardName}&client_id=${process.env.REACT_APP_UNSPLASH_KEY}`)
        .then((response) =>{
            setResult(response.data.results);
            setTotalPage(response.data.total_pages)
            console.log(response);
            setIsLoad(false)
        })
    },[cardName,page]);

    //POP-UP BOX ONCLICK FUNCTION
     
    const showPopUp = (value) =>{
        setPopUp([value]);
        setPopUpToggle(true);
    }


    return (
        <div>
            <div className="imagePage-cards-row">

            {
                !isLoad ? <div className="row">
                {
                    result.map((value,key) => (
                        <div key={key} className='imagePageCards col-3'>
                        <div className='imagePageCard'>
                            {/* <img src={value.urls.raw}  alt='images' /> */}
                            <button className="imagePageCard-buttons" onClick={() => showPopUp(value)}>
                                <Cards data={value} /> 
                            </button>                           
                        </div>
                    </div>
                    ))
                }
                </div> 
                : <div class="spinner-border" role="status" style={{margin: "auto", display: "flex"}}>
                    <span class="visually-hidden">Loading...</span>
                  </div>
            }
           

               
            <div className="pagination_buttons">
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        
                        {page > 1 && 
                            <li class="page-item">
                            <a class="page-link" href="/#" aria-label="Previous">
                                {/* <p style={{margin: "0"}} aria-hidden="true">&laquo;</p> */}
                                <Link to={`?page=${page -1}`}>
                                <p style={{margin: "0"}}  onClick={() => setPage(page -1)}>&laquo;</p>
                                </Link>
                            </a>
                        </li>
                        }
                        
                        <li class="page-item"><a class="page-link" href="/#">1</a></li>
                        <li class="page-item"><a class="page-link" href="/#">2</a></li>
                        <li class="page-item"><a class="page-link" href="/#">3</a></li>
                        {page < totalPage && 
                           
                            <li class="page-item">
                            <a class="page-link" href="/#" aria-label="Next">
                                {/* <p style={{margin: "0"}} aria-hidden="true">&raquo;</p> */}
                                <Link to={`?page=${page + 1}`}>
                                <p style={{margin: "0"}}  onClick={() => setPage(page + 1)}>&raquo;</p>
                                </Link>
                            </a>
                            </li>
                            
                        }
                    </ul>
                </nav>
            </div>

            {
               popUpToggle&& <div className="PopUp-Box" onClick={() => setPopUpToggle(false)}>
                    <div className="popUp-Header">
                        <button onClick={() => setPopUpToggle(false)}>x</button>
                    </div>
                    <div className="popUp-Body">
                    <div className="popUp-Container">
                      {
                        popUp.map((pop) =>{
                            return (
                                <div className="popUp-content"> 
                                    <div className="popUp-profile-Info">
                                        <div className="popUp-profileimg">
                                            <img src={pop.user.profile_image.small} alt="" />
                                            <div className="popUp-profile_Name">
                                                <p className="PopUp-profile-name">{pop.user.name}</p>
                                                <p>{pop.user.username}</p>
                                            </div>
                                        </div>

                                        <div className="popUp-profile-likes">
                                            <button>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                                                </svg>
                                            </button>
                                            <button>+</button>
                                            <button>
                                                <a href={pop.urls.raw} download>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                                                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                                                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
                                                </svg>
                                                </a>
                                            </button>
                                        </div>    
                                    </div>
                                    <img src={pop.urls.full} className="popUp-content-fullImg" alt="" />
                                   
                                </div>
                            )
                        })
                      }
                    </div>
                </div>
            </div>}
        
            </div>
        </div>
    );
}

export default ImagePage;