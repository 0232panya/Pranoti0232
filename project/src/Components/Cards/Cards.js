

import './Cards.css';

function Cards(props){

    return (
        <div className='myCard'>
            <a href="./#">{props.cardNo}</a>
            <p>{props.cardName}</p>
        </div>
    );
}

export default Cards;