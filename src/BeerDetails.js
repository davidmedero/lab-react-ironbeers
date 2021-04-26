import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

function BeerDetails(props) {
  const [beer, setBeer] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (props.match.path === '/beer/:id') {
      axios
        .get(
          `https://ih-beers-api2.herokuapp.com/beers/${props.match.params.id}`
        )
        .then((res) => {
          setBeer(res.data);
          setLoading(false);
        });
    } else if (props.match.path === '/randombeer')
      axios.get(`https://ih-beers-api2.herokuapp.com/beers/`).then((res) => {
        console.log(res);
        setBeer(res.data[Math.floor(Math.random() * res.data.length)]);
        setLoading(false);
      });
  }, []);

  const printBeerDetails = () => {
    return (
      <div className="beerDetailsContainer">
        <div className="beerDetailsImgContainer">
          <img src={beer.image_url} className="beerDetailsImg" />
        </div>
        <div className="containEverythingUnderImg">
          <div className="beerDetailsNameContainer">
            <div className="beerDetailsName">{beer.name}</div>
            <div className="beerDetailsAttenuation">
              {beer.attenuation_level}
            </div>
          </div>
          <div className="beerDetailsTaglineContainer">
            <div className="beerDetailsTagline">{beer.tagline}</div>
            <div className="beerDetailsBrewed">{beer.first_brewed}</div>
          </div>

          <div className="beerDetailsDescription">{beer.description}</div>
          <div className="beerDetailsCreator">
            {beer.contributed_by.split(' ').slice(0, 2).join(' ')}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Navbar />
      {!loading && printBeerDetails()}
    </div>
  );
}

export default BeerDetails;
