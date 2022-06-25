import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoadingToRedirect = () => {
  const [count, setCount] = useState(5);
  let navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => currentCount - 1);
    }, 1000);
    //redirect one count is equal to zero
    count === 0 && navigate("/");
    //cleanup
    return () => clearInterval(interval);
  }, [count, navigate]);
  return (
    <div className="container p-5 text-center">
      Redirecting you in {count} seconds
    </div>
  );
};

export default LoadingToRedirect;
