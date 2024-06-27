import PostList from "../PostList/index.js";

function HomeScreen() {
    $("#wd-explore").append(`
        ${PostList()}
    `);
}
$(HomeScreen);