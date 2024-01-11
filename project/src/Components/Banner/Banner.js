
//import Header from "../Header/Header";
import Modal from 'react-modal';
// import LogIn from "../Form/LogIn";
import { useState } from 'react';

function Banner() {

    const [visibleModal, setVisibleModal] = useState(false);

    return (
        <>
        <div className='banner'>
            {/* <Header /> */}
            <div className='slider'>
                <img src='https://www.decorilla.com/online-decorating/wp-content/uploads/2016/07/find-an-interior-designer.jpg' alt="" id='slideTag'/>
            </div> 
            <div className='overlay'>
                <div className='content'>
                    <h2>Best Design</h2>
                    <p>Check out Interior Design’s new Best in Design book, featuring unique design stories and projects from some of the most influential design-thinkers.</p>
                    <div>
                        <button className="banner-btn" type='button' onClick={() => setVisibleModal(true)} >Log In</button>
                        <Modal isOpen={visibleModal} onRequestClose={() => setVisibleModal(false)} style={{
                            content : {
                                width : "400px",
                                height : "500px",
                                top : "20%",
                                left : "35%",
                                padding : "0",
                                background : "crimson"
                            },
                            
                        }}>
                            <div>
                                <div className='popup-logIn-Title'>
                                    <p>LogIn</p>
                                    <button onClick={() => setVisibleModal(false)}>x</button>
                                </div>
                                <div className='popup-logIn-form'>

                                </div>

                            </div>
                        </Modal>

                        <button className="banner-btn btn2" type='button'>Sign Up</button>
                    </div>
                </div>
            </div>     
        </div>
        </>
    );
}

export default Banner;