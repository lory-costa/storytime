import React, { useState } from "react";

import { useHistory } from "react-router-dom";
import { StoryType } from "../types/StoryType";
import { addStory } from "../utils/firebase";

export default function Home() {
  const [form, setForm] = useState<StoryType>();

  let history = useHistory();

  function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    localStorage.setItem("form", JSON.stringify(form));
    history.push("/story");

    form && addStory(form);
  }

  function handleChange(event: { target: { id: any; value: any } }) {
    const { id, value } = event.target;
    setForm({
      ...form,
      [id]: value,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1 className='title'>StoryTime</h1>
      <div className='row'>
        <div className='col'>
          <label className='label' htmlFor='name'>
            Name
          </label>
          <input
            id='name'
            name='Name'
            type='text'
            onChange={handleChange}
            required
          />
        </div>

        <div className='col'>
          <label className='label' htmlFor='gender'>
            Gender
          </label>
          <select id='gender' name='Gender' onChange={handleChange} required>
            <option></option>
            <option value='boy'>Boy</option>
            <option value='girl'>Girl</option>
            <option value='child'>Neutral</option>
          </select>
        </div>

        <div className='col'>
          <label className='label' htmlFor='bestFriend'>
            Best Friend
          </label>
          <input
            id='bestFriend'
            name='Best Friend'
            type='text'
            onChange={handleChange}
            required
          />
        </div>

        <div className='col'>
          <label className='label' htmlFor='place'>
            Place
          </label>
          <select id='place' name='Place' onChange={handleChange} required>
            <option></option>
            <option value='castle'>Castle</option>
            <option value='cave'>Cave</option>
            <option value='spooky house'>Spooky House</option>
            <option value='spaceship'>Spaceship</option>
          </select>
        </div>

        <div className='col'>
          <label className='label' htmlFor='specialPlace'>
            Special Place
          </label>
          <input
            id='specialPlace'
            name='Special Place'
            type='text'
            onChange={handleChange}
            required
          />
        </div>

        <div className='col'>
          <label className='label' htmlFor='character'>
            Character
          </label>
          <select
            id='character'
            name='Character'
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
