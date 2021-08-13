export const getAllStories = (query: string) => {
  // eslint-disable-next-line
  return fetch(`https://content.guardianapis.com/search?&show-fields=trailText,thumbnail&api-key=${process.env.GUARDIAN_API_KEY}`)
    .then(res => res.json())
};

export const getStories = (query: string) => {
  // eslint-disable-next-line
  return fetch(`https://content.guardianapis.com/search?q=${query}&show-fields=trailText,thumbnail&api-key=${process.env.GUARDIAN_API_KEY}`)
    .then(res => res.json())
};