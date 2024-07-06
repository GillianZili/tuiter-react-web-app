import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TuitItem from "./TuitItem";
import { like } from "./tuits-reducer";
const TuitList = () => {
    const dispatch = useDispatch();
    const likeHandler = (_id) => {
        dispatch(like(_id));
    };
    const tuitsList = useSelector((state) => state.tuits);
    return (
        <ul className="list-group">
            {tuitsList.map((t) => (
                <TuitItem key={t._id} post={t} onLike={() => likeHandler(t._id)} />
            ))}
        </ul>
    );
};

export default TuitList;