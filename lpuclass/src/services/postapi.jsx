import axios from "axios";
const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});
export const getPosts = () => {
  return api.get("/posts"); // return promise from axios
};

//app.jsx ka code:- 


// import React, { useEffect } from "react";
// import { getPosts } from "./services/postapi.jsx";
// export default function App() {
//   const fetchPosts = async () => {
//     const res = await getPosts();
//     console.log(res.data); // <-- API response
//   };
//   useEffect(() => {
//     fetchPosts(); // call API on component mount
//   }, []);
//   return (
//     <div>
//       <h1>Hellloo</h1>
//     </div>
//   );
// }
