import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStories}  from '../hooks/useStories';
import styled from '@emotion/styled'

const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  margin: 10vh auto;

  input {
    width: 300px;
    height: 35px;
    font-size: 16px;
    letter-spacing: 0.5px;
    padding-left: 7px;
    border-radius: 5px;
    border: 0.9px solid black;
    outline: none;
    font-family: 'Montserrat', sans-serif;
  }

  button {
  width: 70px;
  height: 39px;
  font-size: 16px;
  letter-spacing: 0.5px;
  text-align: center;
  margin-left: 10px;
  background-color:  rgba(253,199,210,255);
  color: black;
  border-radius: 5px;
  border: none;
  outline: none;
  font-family: 'Montserrat', sans-serif;

  &:hover {
    background-color: rgba(32,85,132,255);
    color: white;
    cursor: pointer;

    &:active {
      background-color: rgba(253,199,210,255);
      color: black;
    }
  }
}
`

const Homepage = () => {
  const [query, setQuery] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const storiesList = useStories(query);

  const handleSubmit = (event) => {
    event.preventDefault();
    setQuery(searchTerm);
  };

  const searchResults = storiesList.response.results.map(story =>
    <li key={story.id}>
      <div>
        <Link to={{ pathname: `https://www.theguardian.com/${story.id}`}} target="_blank" >
          <img src={story.fields.thumbnail} />
          <p>{story.webTitle}</p>
          <p>{story.webPublicationDate}</p>
          <p>{story.fields.trailText}</p>
        </Link>
      </div>
    </li> 
  );

  return (
    <>
    <SearchForm>
      <form onSubmit={handleSubmit}>
        <input type='text' value={searchTerm} onChange={({ target }) => setSearchTerm(target.value)} />
        <button>Search</button>
      </form>
    </SearchForm>
        <ul>
          {searchResults}
        </ul>
    </>
  );
};

export default Homepage;