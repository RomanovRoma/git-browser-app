import React from "react";
import Head from "./Head";
import { useHistory } from 'react-router-dom'
import { useState, useEffect } from "react";

const Main = () => {
  const [value, setValue] = useState('')
  const history = useHistory()

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const onClick = () => {
    history.push(value)
  }

  useEffect(() => {
    const listener = (event) => {
      if (event.code === 'Enter' || event.code === 'NumpadEnter') {
        history.push(value)
      }
    }
    document.addEventListener('keydown', listener)
    return () => {
      document.removeEventListener('keydown', listener)
    }
  })

  return (
    <div>
      <Head title="Hello" />
      <div>
        <input
          id="input-field"
          type="text"
          value={value}
          onChange={onChange}
        />
        <button
          id="search-button"
          type="button"
          onClick={onClick}
        >
          Search
        </button>
      </div>
    </div>
  );
};

Main.propTypes = {};

export default Main