import React, { useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import './App.css';
import { useHistory } from 'react-router-dom';

function NewBeer(props) {
  const history = useHistory();
  const [newBeer, setNewBeer] = useState({});

  function onChange(e) {
    e.persist();
    newBeer[e.target.name] = e.target.value;
    setNewBeer(newBeer);
  }

  // function submitForm(e) {
  //   e.preventDefault();
  //   axios
  //     .post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
  //     .then(history.push(`/beers`));
  // }

  async function submitForm(e) {
    e.preventDefault();
    const response = await axios.post(
      'https://ih-beers-api2.herokuapp.com/beers/new',
      newBeer
    );
    history.push(`/beers`);
  }

  return (
    <div>
      <Navbar />
      <div className="formContainer">
        <form onSubmit={submitForm}>
          <h1>Create a new beer</h1>
          <div>
            <input
              required
              type="text"
              name="name"
              placeholder="Name"
              onChange={onChange}
            />
            <label htmlFor="floatingInput">Name</label>
          </div>
          <div>
            <input
              required
              type="text"
              name="tagline"
              placeholder="Tagline"
              onChange={onChange}
            />
            <label htmlFor="floatingInput">Tagline</label>
          </div>
          <div>
            <textarea
              required
              placeholder="Description"
              name="description"
              onChange={onChange}
              style={{ height: '100px' }}
            ></textarea>
            <label htmlFor="floatingTextarea2">Description</label>
          </div>
          <div>
            <label htmlFor="floatingInput">First Brewed</label>
          </div>
          <div>
            <input
              required
              type="text"
              name="brewer_tips"
              onChange={onChange}
              placeholder="Brewer Tips"
            />
            <label htmlFor="floatingInput">Brewers Tips</label>
          </div>
          <div>
            <input
              required
              type="number"
              name="attenuation_level"
              onChange={onChange}
              placeholder="Attenuation Level"
            />
            <label htmlFor="floatingInput">Attenuation Level</label>
          </div>
          <div>
            <input
              required
              type="text"
              name="contributed_by"
              onChange={onChange}
              placeholder="Contributor"
            />
            <label htmlFor="floatingInput">Contributed By</label>
          </div>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    </div>
  );
}

export default NewBeer;
