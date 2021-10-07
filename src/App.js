import {useState} from 'react';
import './App.css';

import axios from 'axios';

import SearchForm from './components/search-form/search-form.component';

const App = () => {

  const [data, setData] = useState([])
  const [name, setName] = useState("")

  const handleSubmit = e => {
    e.preventDefault();
    axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${name}`, {
      headers: {
        "x-api-key": "760ad249-a0d2-4b08-92ad-6ac29440c5d2"
      }
    })
    .then(res => setData(res.data))
  }

  const handleChange = e => {
    setName(e.target.value)
  }

  return (
    <div class="app">
      <h1>Dogs <span>Finder</span></h1>
      <SearchForm handleSubmit={handleSubmit} name={name} handleChange={handleChange} />
      {data.length !== 0 ?
      <div class="content">
        <img src={`https://cdn2.thedogapi.com/images/${data[0].reference_image_id}.jpg`} alt="" />
        <h3>{data[0].name}</h3>
        <p>{data[0].origin ? `The ${data[0].name} is ${data[0].origin} in origin.` : ""} {data[0].weight.metric && data[0].height.metric ? `They generally weighs ${data[0].weight.metric} meter, and have a height of ${data[0].height.metric} meter.` : ""} {data[0].bred_for ? `The breed was created for ${data[0].bred_for}.` : ""} {data[0].temperament ? `${data[0].name} are usually ${data[0].temperament}.` : ""}</p>
      </div> 
      : ""
      }
    </div>
  )
}

export default App;