import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import useRefreshToken from "../hooks/useRefresh";
import { logout } from "../features/authSlice";

const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const accessToken = useSelector((state) => state.auth.accessToken);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log("Inside Pers Login");

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (err) {
        console.error("Error verifying refresh token", err);
        dispatch(logout());
        navigate("/login");
      } finally {
        setIsLoading(false);
      }
    };

    !accessToken ? verifyRefreshToken() : setIsLoading(false);
  }, [accessToken, isLoading]);

  return isLoading ? <p>Loading...</p> : <Outlet />;
};

export default PersistLogin;
