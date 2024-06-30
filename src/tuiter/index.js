import React from "react";
import NavigationSidebar from "./navigation-sidebar/index.js";
import WhoToFollowList from "./who-to-follow-list/index.js";
import ExploreComponent from "./explore/index.js";

function Tuiter() {
    return (
        <div>
            <div class="row mt-2">
                <div class="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active="Explore" />
                </div>
                <div class="col-10 col-lg-7 col-xl-6"
                    style={{ "position": "relative" }}>
                    <ExploreComponent/>
                </div>
                <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList/>
                </div>
            </div>
        </div>
    )
}

export default Tuiter