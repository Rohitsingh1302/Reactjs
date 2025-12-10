import React, { useEffect } from "react";
import { getPosts } from "./services/postapi.jsx";
export default function App() {
  const fetchPosts = async () => {
    const res = await getPosts();
    console.log(res.data); // <-- API response
  };
  useEffect(() => {
    fetchPosts(); // call API on component mount
  }, []);
  return (
    <div>
      <h1>Hellloo</h1>
    </div>
  );
}
