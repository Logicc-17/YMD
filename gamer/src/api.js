import axios from 'axios';

const API_URL = 'https://api.rawg.io/api/games';

export const fetchGames = async (filters = {}) => {
  const params = {
    key: '8768d8ace251400ca6c893f393c58052', // Replace with your API key
    page_size: 10, // Number of games per page
    ...filters,
  };
  try {
    const response = await axios.get(API_URL, { params });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching games:', error);
    return [];
  }
};
