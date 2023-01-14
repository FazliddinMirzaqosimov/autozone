import { useNavigate } from "react-router-dom";
import { apiUrl } from "../global";

const deleteProduct = async (id, func) => {
  return await fetch(apiUrl + "/api/v1/products/" + id, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then(func);
};

export default deleteProduct;
