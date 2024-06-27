const NavigationSidebar = ({ active = "" }) => {
    const l = [
      { href: "/", icon: "fab fa-twitter", text: "" },
      { href: "/tuiter/HomeScreen/index.html",icon: "fas fa-home",text: "Home",},
      { href: "/tuiter/explore/index.html",icon: "fas fa-hashtag",text: "Explore",},
      { href: "/", icon: "fas fa-bell", text: "Notifications" },
      { href: "/", icon: "fas fa-envelope", text: "Messages" },
      { href: "/", icon: "fas fa-bookmark", text: "Bookmarks" },
      { href: "/", icon: "fas fa-list", text: "Lists" },
      { href: "/", icon: "fas fa-user", text: "Profile" },
      { href: "/", icon: "fas fa-circle", text: "More" },
    ];
    const content = l
      .map(
        (info) =>
          `<a class="list-group-item ${
            active === info.text ? "active" : ""
          }" href=${info.href}>
              <div class="row align-items-center">
                <i class="col-2 ${info.icon}"></i>
                <div class="col-1 d-none d-xl-block my-sb-text">
                  &nbsp${info.text}
                </div>
              </div>
          </a>`
      )
      .join("");
    return `
          <div class="list-group">
              ${content}
          </div>
          <div class="d-grid mt-2">
              <a href="tweet.html"
              class="btn btn-primary btn-block rounded-pill">
              Tweet</a>
          </div>
          `;
  };
  export default NavigationSidebar;