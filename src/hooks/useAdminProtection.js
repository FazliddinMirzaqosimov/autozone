import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function useRestrict() {
  const navigate = useNavigate();
  const { isAdmin } = useSelector((state) => state.user);
  isAdmin || navigate("/overview");
}

