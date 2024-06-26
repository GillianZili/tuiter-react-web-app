import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return `
        <div class="align-items-center">
            <div class="row align-items-center justify-content-center mb-2">
                <div class="col-11 position-relative">
                <span
                    class="fa fa-search position-absolute"
                    style="left: 30px; top: 13px"
                ></span>
                <input
                    class="rounded-pill ps-5 col-12 my-search"
                    placeholder="Search Tuiter"
                />
                </div>
                <i class="col-1 fa fa-cog fa-lg" style="color:#227fab"></i>
            </div>
            <ul class="nav nav-tabs my-nav-tabs mb-2">
                <div class="nav-item">
                    <a class="my-link myactive" href="./for-you.html">For You</a>
                </div>
                <div class="nav-item">
                    <a class="my-link" href="./trending.html">Trending</a>
                </div>
                <div class="nav-item">
                    <a class="my-link" href="./news.html">News</a>
                </div>
                <div class="nav-item">
                    <a class="my-link" href="./sports.html">Sports</a>
                </div>
                <div class="nav-item">
                    <a class="my-link d-none d-md-block" href="./entertainment.html">Entertainment</a>
                </div>
            </ul>
            <div style="position: relative">
                <img
                src="https://static01.nyt.com/images/2023/03/08/multimedia/08turkey-earthquake-zqbc/08turkey-earthquake-zqbc-threeByTwoMediumAt2X.jpg?quality=75&auto=webp"
                style="width: 100%"
                />
                <div class="my-img-title">The Title of the Img</div>
            </div>
            ${PostSummaryList()}
        </div>
    `;
};