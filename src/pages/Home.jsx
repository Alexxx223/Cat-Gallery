import React, { useEffect, useState } from 'react';
import axios from "axios";
import { catOptions } from '../options';
import { apiKey } from '../api';
export const Home = () => {

    const[catData, setCatData] = useState(null);

    const fetchData = () => {
      axios
      .get(
        "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=10",
        catOptions
      )
      .then((response) => setCatData(response.data))
      .catch((error) => console.error("error during fetching"));
    };

    useEffect(() => {
      fetchData();
    }, []);
    const handleOnClick = (e) => {
      e.preventDefault();
      fetchData();
    }

    const onClickAdd = (event,catId)=>{
      event.preventDefault();

      const catAddFavoriteOptions = {
        headers: {
          "Content-type" : "application/json",
          "x-api-key" : apiKey,
          },
      };

      var data= {
        image_id: catId,
        sub_id: "my-user-1",
      }
      axios.post(
        "https://api.thecatapi.com/v1/favourites",
        data,
        catAddFavoriteOptions
      )
      .then((response)=> console.log(response))
      .catch((error)=> {
        console.log(error);
      });
    };

  return (
    <div>
     
      <h1>Cat Gallery</h1>
      <p>If you want to see more cats, just click the 'More' box.</p>
      <section className='main-container'>
      
       
        <div className="image-grid">
          {catData?.slice(0,6).map((cat) => (
             <div className="image-button-pair">
              <img src= {cat.url} alt="Cat" className="grid-image" />
              <button className="grid-button" onClick={(event)=> onClickAdd(event, cat.id)}>
                <span class="material-symbols-outlined navbar-icons">favorite</span>
              </button>
             </div>
          )
          )}
        
        </div>               

      
      <button className="more-button" onClick={handleOnClick} >More</button>
      </section>

    </div>
  );
};