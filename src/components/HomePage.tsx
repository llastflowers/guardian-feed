import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useStories from '../hooks/useStories';

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
      <form onSubmit={handleSubmit}>
        <input type='text' value={searchTerm} onChange={({ target }) => setSearchTerm(target.value)} />
        <button>Search</button>
      </form>
      <ul>
        {searchResults}
      </ul>
    </>
  );
};

export default Homepage;