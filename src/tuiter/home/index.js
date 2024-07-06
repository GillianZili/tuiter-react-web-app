import React from "react";
// import PostItem from "./PostItem";
// import posts from "./posts";
// import "./index.css";
import TuitsList from "../tuits/TuitsList";
import WhatsHappening from "./whats-happening";

// const HomeComponent = () => {
//   return (
//     <ul className="list-group">
//       {posts.map((p) => (
//         <PostItem key={p.avatarImage} post={p} />
//       ))}
//     </ul>
//   );
// };

// export default HomeComponent;

const HomeComponent = () => {

  return (
    <>
      <h4>Home</h4>
      <WhatsHappening />
      <TuitsList />
    </>
  );

};
export default HomeComponent;