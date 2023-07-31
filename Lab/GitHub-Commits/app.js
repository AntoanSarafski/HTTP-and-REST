function loadCommits() {
  const username = document.querySelector("#username").value;
  const repo = document.querySelector("#repo").value;

  fetch(
    `https://api.github.com/users/testnakov/repos/${username}/${repo}/commits`
  )
    .then((res) => res.json())
    .then(console.log);
}
