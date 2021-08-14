export const getAllStories = (query: string): any => {
  // eslint-disable-next-line
  return fetch(`https://content.guardianapis.com/search?&page-size=12&show-fields=trailText,thumbnail&api-key=${process.env.GUARDIAN_API_KEY}`)
    .then(res => res.json())
};

export const getStories = (query: string): any => {
  // eslint-disable-next-line
  return fetch(`https://content.guardianapis.com/search?q=${query}&page-size=12&show-fields=trailText,thumbnail&api-key=${process.env.GUARDIAN_API_KEY}`)
    .then(res => res.json())
};