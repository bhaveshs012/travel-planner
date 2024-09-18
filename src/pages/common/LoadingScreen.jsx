import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

const LoadingScreen = () => {
  const animationContainer = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/animations/loadingAnimation.json",
    });

    return () => {
      lottie.destroy();
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      <div
        ref={animationContainer}
        style={{
          width: "200px",
          height: "200px",
        }}
      ></div>
    </div>
  );
};

export default LoadingScreen;
