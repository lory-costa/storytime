import React, { useState } from "react";

import { useHistory } from "react-router-dom";

export default function Home(props) {
  const [form, setForm] = useState({});

  let history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    localStorage.setItem("form", JSON.stringify(form));
    history.push("/story");
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1 className='title'>StoryTime</h1>
      <div className='row'>
        <div className='col'>
          <label className='label' htmlFor='Name'>
            Name
          </label>
          <input
            id='Name'
            name='Name'
            type='text'
            onChange={handleChange}
            required
          />
        </div>

        <div className='col'>
          <label className='label' htmlFor='Gender'>
            Gender
          </label>
          <select
            id='Gender'
            name='Gender'
            type='text'
            onChange={handleChange}
            required
          >
            <option></option>
            <option value='boy'>Boy</option>
            <option value='girl'>Girl</option>
            <option value='child'>Neutral</option>
          </select>
        </div>

        <div className='col'>
          <label className='label' htmlFor='Best Friend'>
            Best Friend
          </label>
          <input
            id='Best Friend'
            name='Best Friend'
            type='text'
            onChange={handleChange}
            required
          />
        </div>

        <div className='col'>
          <label className='label' htmlFor='Place'>
            Place
          </label>
          <select
            id='Place'
            name='Place'
            type='text'
            onChange={handleChange}
            required
          >
            <option></option>
            <option value='castle'>Castle</option>
            <option value='cave'>Cave</option>
            <option value='spooky house'>Spooky House</option>
            <option value='spaceship'>Spaceship</option>
          </select>
        </div>

        <div className='col'>
          <label className='label' htmlFor='Special Place'>
            Special Place
          </label>
          <input
            id='Special Place'
            name='Special Place'
            type='text'
            onChange={handleChange}
            required
          />
        </div>

        <div className='col'>
          <label className='label' htmlFor='Character'>
            Character
          </label>
          <select
            id='Character'
            name='Character'
            type='text'
            onChange={handleChange}
            required
          >
            <option></option>
            <option value='mermaid'>Mermaid</option>
            <option value='dinosaur'>Dinosaur</option>
            <option value='unicorn'>Unicorn</option>
            <option value='dragon'>Dragon</option>
          </select>
        </div>

        <input className='submit' type='submit' value='Create Story' />
      </div>
    </form>
  );
}
