import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';
import {
    findTuitsThunk,
    deleteTuitThunk,
    createTuitThunk,
    updateTuitThunk,
} from "../../services/tuits-thunks";


const initialState = {
    tuits: [],
    loading: false
}

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
    initialState,

    extraReducers: {
        [findTuitsThunk.pending]:
            (state) => {
                state.loading = true
                state.tuits = []
            },

        [findTuitsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits = payload
            },

        [findTuitsThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },

        [deleteTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits = state.tuits.filter(t => t._id !== payload)
            },

        [createTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits.push(payload)

            },

        [updateTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                const tuitNdx = state.tuits.findIndex((t) => t._id === payload._id)
                state.tuits[tuitNdx] = {
                    ...state.tuits[tuitNdx],
                    ...payload
                }
            }
    },


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