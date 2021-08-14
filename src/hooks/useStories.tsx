import { useState, useEffect } from 'react';
import { getStories, getAllStories } from '../services/newsAPI';

export const useStories = (query: string) => {
  const [stories, setStories] = useState({
    response: { 
      results: []
    }
  });

  useEffect(() => {
    if(query) {
      getStories(query)
      .then((searchResults: any) => setStories(searchResults));
    } else {
      getAllStories(query)
      .then((searchResults: any) => setStories(searchResults));
    }
  }, [query]);
  return stories;
};