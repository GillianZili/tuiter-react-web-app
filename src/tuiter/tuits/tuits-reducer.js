import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const currentUser = {
    userName: "NASA",
    handle: "@nasa",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL3y9HMdddArZOshBzTKmM4pln2fHcn6_2JQ&s",
};


const templateTuit = {
    ...currentUser,
    topic: "Space",
    time: "2h",
    liked: false,
    replies: 0,
    retuits: 0,
    likes: 0,
}

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: tuits,
    reducers: {
        like(state, action) {
            const _id = action.payload;
            const index = state.findIndex((o) => o._id === _id);
            if (index !== -1) {
                const obj = state[index];
                if (obj.liked) {
                    obj.likes -= 1;
                } else {
                    obj.likes += 1;
                }
                obj.liked = !obj.liked;
            }
        },
        deleteTuit(state, action) {
            const index = state.findIndex(tuit => tuit._id === action.payload);
            state.splice(index, 1);
        },
        createTuit(state, action) {
            state.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })
        }
    }
});

export const { like, createTuit, deleteTuit } = tuitsSlice.actions;
export default tuitsSlice.reducer;