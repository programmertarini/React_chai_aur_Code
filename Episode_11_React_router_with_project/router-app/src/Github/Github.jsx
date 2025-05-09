import React, { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
    const data = useLoaderData()
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/hiteshchoudhary")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);

  return (
    <div className="text-center rounded-xl m-4 bg-orange-500 text-white p-4 text-3xl">
      Github follower : {data.followers}
      <img
        className="mx-auto w-[300px] h-[300px] mt-[12px] rounded-xl"
        src={data.avatar_url}
        alt="git picture"
      />
    </div>
  );
};

export default Github;

export const gitDataLoader = async () => {
  const response = await fetch("https://api.github.com/users/hiteshchoudhary");
  
  return response.json();
};
