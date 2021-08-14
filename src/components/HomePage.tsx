import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStories}  from '../hooks/useStories';
import styled from '@emotion/styled'

const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  margin: 50px auto;

  input {
    width: 300px;
    height: 35px;
    font-size: 16px;
    letter-spacing: 0.5px;
    padding-left: 10px;
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

const Pagination = styled.div`
  display: flex;
  justify-content: center;

`

const StoriesList = styled.div`
ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

li {
  width: 400px;
  margin: 10px;
  text-align: center;
  list-style-type: none;
}

img {
  width: 400px;
  border-radius: 5px;
}

a {
  text-decoration: none;
  color: black;
  font-size: 16px;
  line-height: 22px;

  &:hover {
    text-decoration: none;
    opacity: 75%;
  }
}
`
const Homepage = () => {
  const [query, setQuery] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const storiesList = useStories(query);
  // const pagesInfo = useStories(query);

  const handleSubmit = (event) => {
    event.preventDefault();
    setQuery(searchTerm);
  };

  const searchResults = storiesList.response.results.map(story =>
    <li key={story.id}>
      <div>
        <Link to={{ pathname: `https://www.theguardian.com/${story.id}`}} target='_blank' >
          <img src={story.fields.thumbnail}/>
          <p>{story.webTitle}</p>
          <p>{story.webPublicationDate.slice(0, 10)}</p>
          <p>{story.fields.trailText}</p>
        </Link>
      </div> 
    </li>
  );

  return (
    <>
    <SearchForm>
      <form onSubmit={handleSubmit}>
        <input placeholder='What are you looking for?' type='text' value={searchTerm} onChange={({ target }) => setSearchTerm(target.value)} />
        <button>Search</button>
      </form>
    </SearchForm>
    <StoriesList>
      <ul>
        {searchResults}
      </ul>
    </StoriesList>
    <div>
      <Pagination>
        <button>PREV</button>
        <p>(PAGE 1)</p>
        <button>NEXT</button>
      </Pagination>
    </div>
    </>
  );
};

export default Homepage;