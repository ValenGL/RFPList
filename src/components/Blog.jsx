import React, { useState, useEffect } from "react";

export function Blog() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await data.json();
    setPosts(posts);
  };
  return (
    <div>
      <h1> Blog </h1>
      {posts.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <h5>{item.body}</h5>
          <br></br>
          {/* ToDo styles: p & m */}
        </div>
      ))}
    </div>
  );
}
