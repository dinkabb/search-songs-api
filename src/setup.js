import layout from "./views/layout";
import spinner from "./views/loader";
import fetchSongs from "./data";
import createSongs from "./views/songs";

function render(markup, parent) {
  parent.innerHTML = markup;
}

function setup() {
  const layoutContainer = document.getElementById("app");
  render(layout, layoutContainer);

  const searchInput = document.getElementById("search");
  const appContainer = document.getElementById("content");

  searchInput.addEventListener("keydown", (event) => {
    const enteredText = event.target.value.trim();

    if (!enteredText || enteredText.length < 2) {
      console.log("empty text!");
      return;
    }

    render(spinner, appContainer);

    fetchSongs(enteredText).then(function (songsArray) {
      const songsList = createSongs(songsArray);

      render(songsList, appContainer);
    });
  });
}

export default setup;
