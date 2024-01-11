
import './Card.css';
//import Images_Page from '../Images_page/Images_Page';
//import { Link, NavLink } from 'react-router-dom';

function Card(val){
    return(
        <div className='Cards'>
            {/* <NavLink to='Images_Page' > */}
            <div className='card'>
                <figure>
                    <img src={val.item.image} alt='' />
                </figure>
                <p className='info'>{val.item.cardName}</p>
                <button className='card-button'><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                  </svg></button>
            </div>
           
            {/* </NavLink> */}
        </div>
    );
}

export default Card;