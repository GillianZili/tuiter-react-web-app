const PostSummaryItem = ({ topic, userName, time, image, title }) => {
    return `
        <li class="list-group-item list-group-item-bg">
            <div class="row align-items-center">
              <div class="col-9">
                <div class="text-muted">${topic}</div>
                <div>
                  ${userName}
                  <i class="fas fa-check-circle"></i>
                  <div class="d-inline text-muted">- ${time}</div>
                </div>
                <div>
                  ${title}
                </div>
              </div>
              <img class="col-3" src="${image}" style="padding: 5%" />
            </div>
          </li>
        `;
};

export default PostSummaryItem;