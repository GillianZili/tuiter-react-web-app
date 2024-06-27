import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return `
        <div class="align-items-center">
            <div class="row align-items-center justify-content-center mb-2">
                <div class="col-11 position-relative">
                <span
                    class="fa fa-search position-absolute"
                    style="left: 30px; top: 8px"
                ></span>
                <input
                    class="rounded-pill ps-5 col-12 my-search"
                    placeholder="Search Tuiter"
                />
                </div>
                <i class="col-1 fa fa-cog fa-lg" style="color:#3fb8f0"></i>
            </div>
            <ul class="nav mb-2">
                <div class="nav-item">
                    <a class="my-link myactive d-none d-md-block" href="./for-you.html">For You</a>
                </div>
                <div class="nav-item">
                    <a class="my-link d-none d-md-block" href="./trending.html">Trending</a>
                </div>
                <div class="nav-item">
                    <a class="my-link d-none d-md-block" href="./news.html">News</a>
                </div>
                <div class="nav-item">
                    <a class="my-link d-none d-md-block" href="./sports.html">Sports</a>
                </div>
                <div class="nav-item">
                    <a class="my-link d-none d-md-block" href="./entertainment.html">Entertainment</a>
                </div>
            </ul>
            <div style="position: relative">
                <img
                src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                style="width: 100%"
                />
                <div class="my-img-title">The Title of the Img</div>
                <div class="card-img-overlay">
                    <h4 class="card-title title-style">
                        Forest Camping Luxury Tent</h4>
                        <p class="card-text" style="color:white">Immerse yourself in nature</p>
                </div>
            </div>
            
            ${PostSummaryList()}
        </div>
    `;
};

export default ExploreComponent;
