import { useDispatch } from "react-redux";
import apiClient from "../api/apiClient";
import { login, logout } from "../features/authSlice";
import { toast } from "react-toastify";

export const checkAuth = async () => {
  const dispatch = useDispatch();
  try {
    const token = Cookies.get("accessToken");
    if (token) {
      const response = await apiClient.get("users/current-user");
      dispatch(login(response.data.data.user));
    } else {
      dispatch(logout());
    }
  } catch (error) {
    toast.error("Authentication Error !!");
  }
};
