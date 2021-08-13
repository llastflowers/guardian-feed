import { useState, useEffect } from 'react';
import { getAllStories, getStories } from '../services/newsAPI';

const useStories = (query: string) => {
  const [stories, setStories] = useState({response: { results: []}});

useEffect(() => {
  if(query !== '') {
    getStories(query)
      .then((searchResults: any) => setStories(searchResults));
  }
}, [query]);
return stories;
};

export default useStories;