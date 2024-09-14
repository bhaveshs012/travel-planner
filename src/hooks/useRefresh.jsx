import apiClient from "../api/apiClient";
import { useSelector, useDispatch } from "react-redux";
import { setAccessToken } from "../features/authSlice";

const useRefreshToken = () => {
  const dispatch = useDispatch();

  const refresh = async () => {
    try {
      const response = await apiClient.post("/users/refresh-token");
      dispatch(setAccessToken(response.data.data.accessToken));
      return response.data.accessToken;
    } catch (error) {
      console.error("Error refreshing token:", error);
      return null;
    }
  };

  return refresh;
};

export default useRefreshToken;
