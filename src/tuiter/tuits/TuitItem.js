import React from "react";
import TuitStats from "./TuitStats";
import {deleteTuitThunk} from "../../services/tuits-thunks";
import { useDispatch } from "react-redux";
const TuitItem = ({ post = {}, onLike }) => {
    const {
        _id,
        userName = "",
        time = "",
        liked = false,
        replies = 0,
        retuits = 0,
        likes = 0,
        handle = "",
        tuit = "",
        image = "",
    } = post;
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    };

    return (
        <li className="list-group-item my-border-bottom">
            <div className="row">
                <div className="col-2">
                    <img
                        alt=""
                        src={image}
                        style={{ width: "80%", borderRadius: "50%" }}
                    />
                </div>
                <div className="col-10">
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", gap: "5px" }}>
                            {userName}
                            <i
                                className="bi bi-check-circle-fill"
                                style={{ color: "rgb(29,155,240)" }}
                            ></i>
                            <div className="d-inline text-muted">
                                @{handle + " · " + time}
                            </div>
                        </div>
                        <i
                            className="bi bi-x-lg"
                            onClick={() => deleteTuitHandler(_id)}
                        ></i>
                    </div>
                    <div>{tuit}</div>
                    <TuitStats
                        replies={replies}
                        retuits={retuits}
                        likes={likes}
                        liked={liked}
                        onLike={onLike}
                    />
                </div>
            </div>
        </li>
    );
};
export default TuitItem;
