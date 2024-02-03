
import './Banner.css';
import LogInPopUp from '../Login_PopUp/LogInPopUp';

function Banner({visibleModal, setVisibleModal}) {

    return (
        <>
        <div className='banner'>
            <div className='slider'>
                <img src='https://www.decorilla.com/online-decorating/wp-content/uploads/2016/07/find-an-interior-designer.jpg' alt="" id='slideTag'/>
            </div> 
            <div className='overlay'>
                <div className='content'>
                    <h2>Best Design</h2>
                    <p>Check out Interior Design’s new Best in Design book, featuring unique design stories and projects from some of the most influential design-thinkers.</p>
                    <div>
                        <button className="banner-btn" type='button' onClick={() => setVisibleModal(true)} >BOOK FREE CONSULTATION</button>

                        {visibleModal &&<LogInPopUp visibleModal={visibleModal} setVisibleModal={setVisibleModal} />}
                    </div>
                </div>
            </div>     
            
        </div>
        </>
    );
}

export default Banner;