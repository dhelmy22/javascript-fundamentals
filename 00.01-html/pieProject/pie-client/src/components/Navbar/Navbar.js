
import React from 'react';
import './Navbar.css';
import piePic from '../../assets/pie.jpeg';
import Logout from './Logout/Logout'

const Navbar = (props)=>{  // app.js is the 'props'   placeholder that we use to pass between  can only pass parent to child, not child to parent

return(

<div>
    <nav>
        <img id="piePic" src={piePic} alt="pie"/>
        <Logout clearToken={props.clearToken}/>

    </nav>
</div>

)

}

export default Navbar;