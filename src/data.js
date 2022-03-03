import jsonp from "jsonp";

function fetchSongs(term) {
  const songsUrl = `https://itunes.apple.com/search?term=${term}&entity=song`;

  return new Promise((resolve) => {
    jsonp(songsUrl, function (error, response) {
      console.log("Successful", response.results);
      resolve(response.results);
    });
  });
}

export default fetchSongs;
