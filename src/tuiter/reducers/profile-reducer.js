import { createSlice } from "@reduxjs/toolkit";

const profile = {
    firstName: 'Jose',
    lastName: 'Annunziato',
    handle: '@jannunzi',
    profilePicture: 'https://avatars.githubusercontent.com/u/1682522?v=4',
    bannerPicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4TLrfLD1sAlMmqY7igJx4YsvOpJ6FxoyrhQ&s',
    bio: 'Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retuits and likes are not endorsements.',
    website: 'youtube.com/webdevtv',
    location: 'Boston, MA',
    dateOfBirth: '7/7/1968',
    dateJoined: '4/2009',
    followingCount: 340,
    followersCount: 223,
};

const profileSlice = createSlice({
    name: "profile",
    initialState: profile,
    reducers: {
        setProfile(state, action) {
            const newprofile = action.payload;
            Object.entries(newprofile).forEach(([key, value]) => {
                state[key] = value;
            });
        },
    },
});

export default profileSlice.reducer;
export const { setProfile } = profileSlice.actions;