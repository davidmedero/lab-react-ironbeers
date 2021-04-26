import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';

function AllBeers(props) {
  const [beers, setBeers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/`).then((res) => {
      setBeers(res.data);
      setLoading(false);
    });
  }, []);

  let allBeers = () => {
    return beers.map((beer, i) => {
      return (
        <Link key={i} to={`/beer/${beer._id}`} className="allBeersLinkStyle">
          <div className="allBeersMapContainer">
            <img className="allBeersPics" src={beer.image_url} />
            <div className="allBeersMargin">
              <div className="allBeersName">{beer.name}</div>
              <br></br>
              <div className="allBeersTagline">{beer.tagline}</div>
              <br></br>
              <div className="allBeersCreator">
                <b>Created by:</b>{' '}
                {/* {beer.contributed_by.split(' ').slice(0, 2).join(' ')} */}
              </div>
            </div>
          </div>
          <hr className="allBeersBorder"></hr>
        </Link>
      );
    });
  };

  return (
    <div>
      <Navbar />
      <div className="allBeersSearchContainer">
        <form>
          <div>
            <input
              type="text"
              placeholder="Search.."
              className="allBeersSearchbar"
              // onChange={onChange}
            ></input>
          </div>
        </form>
      </div>
      <div className="allBeersContainer">{!loading && allBeers()}</div>
    </div>
  );
}
// onSubmit={submitForm}
export default AllBeers;
