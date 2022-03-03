function songs(songsArray) {
  console.log("songsArray", songsArray);
  let listItems = "";
  for (let i = 0; i < songsArray.length; i++) {
    listItems += `<li>${songsArray[i].artistName} - ${songsArray[i].trackName} </li>`;
  }
  return `<ul>` + listItems + `</ul>`;
}

export default songs;
