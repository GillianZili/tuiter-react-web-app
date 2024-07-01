import React from "react";
import PostItem from "./PostItem";
import posts from "./posts";
import "../explore/index.css";

const HomeComponent = () => {
  return (
    <ul className="list-group">
      {posts.map((p) => (
        <PostItem key={p.avatarImage} post={p} />
      ))}
    </ul>
  );
};

export default HomeComponent;