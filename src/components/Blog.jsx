import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import Spinner from "./Spinner";
import Card from "./Card";

const Blog = () => {
  // consume
  const { posts, loading } = useContext(AppContext);

  return (
    <div className="w-11/12 max-w-[500px] mt-20 mb-20">
      {loading ? (
        <div className="flex justify-center items-center h-screen"><Spinner /></div>
      ) : posts.length === 0 ? (
        <div>No Post Found</div>
      ) : (<Card posts={posts} />)}
    </div>
  );
};

export default Blog;
