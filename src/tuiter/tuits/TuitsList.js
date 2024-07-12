import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TuitItem from "./TuitItem";
import { findTuitsThunk, updateTuitThunk } from "../../services/tuits-thunks";
import { like } from "./tuits-reducer";
const TuitList = () => {
    const { tuits, loading } = useSelector(state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => { dispatch(findTuitsThunk()) }, [])
    return (
        <ul className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {tuits.map((t) => (
                <TuitItem key={t._id} post={t} onLike={() => dispatch(updateTuitThunk({
                    ...t,
                    likes: t.likes+(t.liked ? - 1 : 1),
                    liked: !t.liked
                }))} />
            ))}
        </ul>
    );
};

export default TuitList;