const WhoToFollowListItem = ({ avatarIcon, userName, handle }) => {
    return `
          <li class="list-group-item">
              <div class="row align-items-center justify-content-between">
                  <div class="row col-9 align-items-center">
                      <img
                          class="col-4"
                          src="${avatarIcon}"
                      />
                      <div class="col-8">
                          <div style="white-space: nowrap">
                              ${userName}
                              <i class="fas fa-check-circle"></i>
                          </div>
                          <div class="text-muted">@${handle}</div>
                      </div>
                  </div>
                  <button type="submit" class="btn btn-primary rounded-pill col-3">
                      Follow
                  </button>
              </div>
          </li>
      `;
  };
  export default WhoToFollowListItem;