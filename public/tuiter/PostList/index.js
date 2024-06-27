import PostItem from "./PostItem.js";
import exploreItems from "./posts.js";

const PostList = () => {
  return `
        ${exploreItems.map((e) => PostItem(e)).join("")}
    `;
};
export default PostList;