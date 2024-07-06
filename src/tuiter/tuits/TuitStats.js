import React from "react";
const TuitStats = ({
  replies = 0,
  retuits = 0,
  likes = 0,
  liked = false,
  onLike = () => {},
}) => {
  const buttons = [
    { icon: "bi bi-chat-left-dots", text: replies },
    { icon: "bi bi-arrow-left-right", text: retuits },
    { icon: "bi bi-heart", text: likes, active: liked, click: onLike },
    { icon: "bi bi-escape" },
  ];
  return (
    <div
      className="align-items-center"
      style={{ display: "flex", marginTop: "15px" }}
    >
      {buttons.map(({ icon, text = "", active = false, click = () => {} }) => (
        <div
          className={active ? "text-danger" : "text-muted"}
          key={icon}
          style={{
            flex: 1,
            display: "flex",
            gap: "7px",
          }}
        >
          <i className={icon} onClick={click}></i>
          <div>{text}</div>
        </div>
      ))}
    </div>
  );
};
export default TuitStats;
