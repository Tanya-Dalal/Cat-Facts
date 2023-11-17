import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

const CatFact = () => {
    const [fact, setFact] = useState('');
    const [imageUrl, setImageUrl] = useState('');
  
    const fetchCatFact = async () => {
      try {
        // Fetch cat fact from Cat Facts API
        const factResponse = await axios.get('https://catfact.ninja/fact');
        setFact(factResponse.data.fact);
  
        // Fetch cat image from The Cat API
        const imageResponse = await axios.get('https://api.thecatapi.com/v1/images/search');
        setImageUrl(imageResponse.data[0].url);
      } catch (error) {
        console.error('Error fetching cat fact or image:', error);
      }
    };
  
    useEffect(() => {
      fetchCatFact();
    }, []);
  
    const handleMoreFactsClick = () => {
      fetchCatFact();
    };
  
  return (
    <div>
      {imageUrl && <img src={imageUrl} alt="Cat" class="card-img-top" style={{ maxWidth: '100%' }} />}
      <h5 class="card-title">Random Cat Fact</h5>
      <p class="card-text">{fact}</p>
      <button onClick={handleMoreFactsClick} class="btn btn-primary">More Facts</button>
    </div>
  );
};

export default CatFact;
