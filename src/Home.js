import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import beers from './assets/beers.png';
import newBeer from './assets/new-beer.png';
import randomBeer from './assets/random-beer.png';
import axios from 'axios';

function Home(props) {
  return (
    <div className="homeContainer">
      <Link className="homeLink" to="/beers">
        <img src={beers} className="homeImgStyle" />
        <h1>All Beers</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat velit
          voluptates in molestias qui error excepturi placeat dolorem. Tempora
          sint odit error, quae aliquid blanditiis.
        </p>
      </Link>
      <Link className="homeLink" to="/randombeer">
        <img src={randomBeer} className="homeImgStyle" />
        <h1>Random Beer</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat velit
          voluptates in molestias qui error excepturi placeat dolorem. Tempora
          sint odit error, quae aliquid blanditiis.
        </p>
      </Link>
      <Link className="homeLink" to="/new-beer">
        <img src={newBeer} className="homeImgStyle" />
        <h1>New Beer</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat velit
          voluptates in molestias qui error excepturi placeat dolorem. Tempora
          sint odit error, quae aliquid blanditiis.
        </p>
      </Link>
    </div>
  );
}

export default Home;
