import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const response = await fetch("http://localhost:5000/api/v1/");
    const data = await response.json();
    console.log(data);
  };

  return <div className="bg-indigo-600 w-screen h-screen">Home</div>;
};

export default Home;
