
import './Card.css';

function Cards({data}){
    return(
        <div className='imagePge-Cards'>
           
            <div className='imagePge-card'>
                <img src={data.urls.raw} alt='' />
            </div>
        </div>
    );
}

export default Cards;