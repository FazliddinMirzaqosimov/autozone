import { apiUrl } from "../global";

const getProducts = async (query = {}, func) => {
  fetch(
    `${apiUrl}/api/v1/products/?${
      query.filters.category ? `category=${query.filters.category}` : ""
    }&${query.filters.car ? `car=${query.filters.car}` : ""}&${
      query.filters.country ? `country=${query.filters.country}` : ""
    }&${query.limit ? `limit=${query.limit}` : ""}&${
      query.sort ? `sort=${query.sort}` : ""
    }`
  )
    .then((res) => res.json())
    .then(func);
};

export default getProducts;
