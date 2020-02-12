import axios from "axios";

// Documentation at https://punkapi.com/documentation/v2
const BASE_URL = "https://api.punkapi.com/v2";

export { getBeers };

function getBeers(page, food) {
  const url = food?
      `${BASE_URL}/beers?page=${page}&per_page=9&food=${food}`
    : `${BASE_URL}/beers?page=${page}&per_page=9`;
  return axios.get(url).then(response => response.data);
}
