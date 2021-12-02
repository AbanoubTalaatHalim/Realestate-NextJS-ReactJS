import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "f00bdfbeb3mshb6508a6c86c7f96p17d5dcjsn44702807e070",
    },
  });

  return data;
};
