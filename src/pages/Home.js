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
          <label className='label' htmlFor='Your name'>
            Your name
          </label>
          <input
            id='Your name'
            name='Your name'
            type='text'
            onChange={handleChange}
            required
          />
        </div>

        <div className='col'>
          <label className='label' htmlFor='Gender'>
            Gender
          </label>
          <input
            id='Gender'
            name='Gender'
            type='text'
            onChange={handleChange}
            required
          />
        </div>

        <div className='col'>
          <label className='label' htmlFor='Place'>
            Place
          </label>
          <input
            id='Place'
            name='Place'
            type='text'
            onChange={handleChange}
            required
          />
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
          <label className='label' htmlFor='Another Friend'>
            Another Friend
          </label>
          <input
            id='Another Friend'
            name='Another Friend'
            type='text'
            onChange={handleChange}
            required
          />
        </div>

        <input className='submit' type='submit' value='Create Story' />
      </div>
    </form>
  );
}
