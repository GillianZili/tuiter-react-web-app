import React from "react";
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
    const buttons = [
        { icon: "bi bi-chat-left-dots", text: comments },
        { icon: "bi bi-arrow-left-right", text: retuit },
        { icon: "bi bi-heart", text: like },
        { icon: "bi bi-escape" },
    ]
    return (
        <div className="list-group">
            <a className="list-group-item">
                <div className="row justify-content-around">
                    <div className="col-2">
                        <img src={avatarImage} className="rounded-circle" height={60} />
                    </div>
                    <div className="col-10">
                        <span className="wd-text-white">{userName}</span>
                        <span className="wd-text-gray">{time}</span>
                        <div className="wd-text-white">{titleText}</div>
                        <div className="position-relative mb-2">
                            <div className="w-100">
                                <img src={image} />
                                {subtitle}
                                {text}
                            </div>
                        </div>
                        <div
                            className="align-items-center"
                            style={{ display: "flex", marginTop: "15px", marginBottom: "15px" }}
                        >

                            {buttons.map(({ icon, text = "" }) => (
                                <div
                                    className="text-muted"
                                    style={{ flex: 1, display: "flex", gap: "7px" }}
                                >
                                    <i className={icon}></i>
                                    <div>{text}</div>
                                </div>

                            ))}
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default PostItem;