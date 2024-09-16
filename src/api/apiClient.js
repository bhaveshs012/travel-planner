import axios from "axios";
import Cookies from "js-cookie";

// Create an instance of Axios
const apiClient = axios.create({
  baseURL: "http://localhost:8000/api/v1",
  withCredentials: true, // Allow cookies to be sent with requests
});

// Request Interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Getting the access token stored in cookies
    const accessToken = Cookies.get("accessToken");

    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
apiClient.interceptors.response.use(
  (response) => {
    // If the response is successful, directly return the response
    return response;
  },
  async (error) => {
    // get the prev request details
    const originalRequest = error.config;

    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        // Attempt to refresh the access token
        const refreshToken = Cookies.get("refreshToken"); // Get the refresh token

        if (refreshToken) {
          const response = await axios.post(
            "http://localhost:8000/api/v1/users/refresh-token",
            {
              refreshToken: refreshToken,
            },
            { withCredentials: true }
          );

          const newAccessToken = response.data.data.accessToken;
          const newRefreshToken = response.data.data.refreshToken;

          // Store the new access token in cookies
          Cookies.set("accessToken", newAccessToken);
          Cookies.set("refreshToken", newRefreshToken);

          // Update the Authorization header and retry the original request
          originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

          return apiClient(originalRequest);
        } else {
          // Redirect to login if no refresh token is available
          window.location.href = "/login";
        }
      } catch (refreshError) {
        // Redirect to login if refreshing the token fails
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

export default apiClient;
