const form = document.querySelector("#searchForm");
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const userSearch = form.elements.query.value;
  const config = { params: { q: userSearch }, headers: {} };
  const res = await axios.get(
    `http://api.tvmaze.com/search/shows`,
    config
  );
  collectImages(res.data);
  form.elements.query.value = "";
});

const collectImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement("img");
      img.src = result.show.image.medium;
      let div = document.querySelector("#gallery");
      div.append(img);
    }
  }
};
const removeButton = document.querySelector("#remove");
removeButton.addEventListener("click", (e) => {
  e.preventDefault();
  let div = document.getElementById("gallery");
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
});
