import React from "react";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import ExploreComponent from "./explore";
import HomeComponent from "./home";
import { Routes, Route } from "react-router";


function Tuiter() {
    return (
        <div class="row mt-2">
            <div class="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar/>
            </div>
            <div class="col-10 col-md-8 col-lg-7 col-xl-6"
                style={{ "position": "relative" }}>
                <Routes>
                    <Route path="home" element={<HomeComponent />} />
                    <Route path="explore" element={<ExploreComponent />} />
                </Routes>
                {/* <HomeComponent /> */}
            </div>
            <div class="d-none d-sm-none d-md-none d-lg-block col-md-2 col-lg-4 col-xl-4">
                <WhoToFollowList />
            </div>
        </div>
    )
}

export default Tuiter;