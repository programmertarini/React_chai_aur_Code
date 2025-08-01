import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Protected = ({ children, authentication = true }) => {
  const navigate = useNavigate();
  const [loader, setLoder] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    // if (authStatus ===true){
    //     navigate("/")
    // } else if (authStatus === false) {
    //     navigate("/login")
    // }

    if (authentication && authStatus !== authentication) {
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      navigate("/");
    }

    setLoder(false);
  }, [navigate, authentication, authStatus]);

  return loader ? <h1>Loading...</h1> : <>{children}</>;
};

export default Protected;
