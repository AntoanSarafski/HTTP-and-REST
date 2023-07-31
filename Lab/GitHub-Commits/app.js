function loadCommits() {
  const username = document.querySelector("#username").value;
  const repo = document.querySelector("#repo").value;

  if (!username || !repo) {
    console.log("Error!");
  }

  const list = document.querySelector("ul");
  list.innerHTML = "";
  fetch(`https://api.github.com/repos/${username}/${repo}/commits`)
    .then((res) => res.json())
    .then((commits) => {
      commits.forEach((commitObject) => {
        const item = document.createElement("li");
        item.textContent = commitObject.commit.message;

        list.appendChild(item);
      });
    });
}
