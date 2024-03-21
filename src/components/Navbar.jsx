import React from 'react'
import {Link} from "react-router-dom"
export const Navbar = () => {
  return (
    <nav>
    <div className='navbar-container'>
      <Link className='navbar-link' to={"/"}>
       <h3 className='navbar-title'>
       <span class="material-symbols-outlined navbar-title-icon">snippet_folder</span>
       <div className='nav-title-text'>CATS GALLERY</div>
       </h3>
       </Link>

     
      <div className='navbar-right-part'>
      <div className='navbar-links'>
      <Link className='navbar-link' to={"/favourites"}>
        <span class="material-symbols-outlined navbar-icons">favorite</span>
          <div className='navbar-option' >Favourites</div>
        </Link>
        </div>
      </div>
    </div>
    </nav>
  );
};
