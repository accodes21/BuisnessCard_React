import React from 'react';
import pic from "../photo1.jpg"

function ImgBox(){
    return (
        <>
        <div className="imgbox">
            <img src={pic} alt="" />
            <h1>Aarya Chopkar</h1>
            <h3>Frontend Developer</h3>
            <div className="btn">
                <button onClick={`https://www.linkedin.com/in/aarya-chopkar-581aa2228/`}><i class="fa-solid fa-envelope"></i> Email</button>
                <button className='linkedin'><i class="fa-brands fa-linkedin"></i> LinkedIn</button>
            </div>
        </div>
        </>
    )
}

export default ImgBox;