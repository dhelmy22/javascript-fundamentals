// 

import React from 'react';
import './Logout.css';
import logoutPic from '../../../assets/images.png';

const Logout = (props)=>{

return(

<div>

<img onClick={() => props.clearToknen()} id="logout" className="logout" src={logoutPic} alt="logoutButton"/>

</div>

)

};

export default Logout;