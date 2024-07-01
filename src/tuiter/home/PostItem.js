const PostItem = ({ post = {} }) => {
    const {
        avatarImage = "",
        userName = "",
        time = "",
        titleText = "",
        image = "",
        subtitle = "",
        text = "",
        comments = "",
        retuit = "",
        like = "",
        forward = "",
    } = post;
    return (
        <div class="wd-bookmarks-post">
            <img src={avatarImage} class="wd-avatar-img" />
            <div class="wd-bookmarks-post-body">
                <span class="wd-text-white">{userName}</span>
                <span class="wd-text-gray">{time}</span>
                <div class="wd-text-white">{titleText}
                </div>
                <div class="wd-bookmarks-post-link">
                    <img src={image} class="wd-picture" />
                    <div class="wd-bookmarks-inner-text">
                        <div class="wd-text-white">{subtitle}</div>
                        <div class="wd-text-gray">{text}</div>
                    </div>
                </div>
                <div class="wd-icon-bar">
                    <a href="#" >{comments}</a>
                    <a href="#" >{retuit}</a>
                    <a href="#" >{like}</a>
                    <a href="#" >{forward}</a>
                </div>
            </div>
        </div>
    );
};

export default PostItem;