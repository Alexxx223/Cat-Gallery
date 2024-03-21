import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { catOptions } from '../options';

export const Favourites = () => {
  
    const [favorites, setFavorites]= useState(null);
  const [catData,setCatData] = useState([]);
    const fetchData = () => {
      axios
      .get(
        `https://api.thecatapi.com/v1/favourites?sub_id=my-user-1`,
        catOptions
      )
      .then((response) => setFavorites(response.data));
    };

    const populateArray = () => {
      favorites?.map((favorite) =>{
        axios.get(`https://api.thecatapi.com/v1/images/${favorite.image_id}`,
        catOptions
        ).then((response)=> setCatData((fulldata) => [...fulldata, response.data]) );
      });
    };

    useEffect(()=>{
      fetchData();
      populateArray();
    }, []);

    const handleLoadImages = () =>{
      populateArray();
    };

    

    // console.log(favorites);
    return <section className="favorite-container">
      <h1 className="favorite-image-title">Favourites</h1>
      <button className="favorites-button" onClick={handleLoadImages}>
        load favorites
      </button>
      <div className="favorite-image-grid">
      {catData?.slice(0,6).map((cat)=>(
        <div className="image-button-pair">
          <div>{cat.image_id}</div>
          <img src={cat.url}  className='fav-grid-image' />
        </div>
      ))}
      </div>
    </section>
}
