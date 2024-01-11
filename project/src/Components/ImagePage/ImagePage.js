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


    return (
        <div className="imagePage-cards-row">
            <div>{page}/ {totalPage}</div>
            {
                !isLoad ? <div className="row">
                {
                    result.map((value,key) => (
                        <div key={key} className='imagePageCards col-3'>
                        <div className='imagePageCard'>
                            {/* <img src={value.urls.raw}  alt='images' /> */}
                            <Cards data={value} />                            
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
                {/* {page > 1 && <button onClick={() =>setPage(page -1)}>Previous</button>}
                {page < totalPage && <button onClick={() => setPage(page + 1)}>next</button>} */}
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
            {/* <div className="row">
                {
                    result.map((value,key) => (
                        <div key={key} className='Cards col-3'>
                        <div className='card'>
                            <img src={value.urls.raw}  alt='images' />
                        </div>
                    </div>
                    ))
                }
            </div> */}
            {/* {
                result.map((key,data)=>{
                return(
                    <div>
                        <Cards key={key} data={data} />
                    </div>
                )})
            } */}

            {/* {
                !image ? <h1>Loading...</h1> :
                <div>
                    {
                        image.map((key,data)=>(
                            <div>
                                <Cards key={key} data={data} />
                            </div>
                        ))
                    }
                </div>
            } */}
        </div>
    );
}

export default ImagePage;