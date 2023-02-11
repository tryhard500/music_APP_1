let search = new URLSearchParams(window.location.search);
let id = search.get(`i`);
console.log(id);

let playButton = document.querySelectorAll(`.play-button`);

for (let i = 0; i < playButton.length; i++){
  playButton[i].addEventListener(`click`,function(){
    if (playButton[i].classList.contains('is-play')){
      playButton[i].src = 'assets/play_icon.png';
      playButton[i].classList.remove('is-play');
    } else {
      playButton[i].src = 'assets/pause_icon.png';
      playButton[i].classList.add('is-play');
    }
  });
}

document.querySelector(`.album`).innerHTML = `
  <div class="row row-cols-1 row-cols-xl-2">
    <div class="col col">
      <img src="${albums[id].img}" class="img-fluid rounded-start album-img" >
    </div>
    <div class="col col">
      <div class="card-body">
        <h5 class="card-title">
          ${albums[id].title}
        </h5>
        <p class="card-text">
          ${albums[id].description}
        </p>
        <p class="card-text"><small class="text-muted">Альбом выпущен ${albums[0].year}</small></p>
      </div>
    </div>
  </div>
`;

for (let i = 0; i < albums[id].tracks.length; i++){
  document.querySelector(`.playlist`).innerHTML += `
  <li class="list-group-item d-flex align-item-center">
    <img src="assets/play_icon.png" class="me-3 play-button" height="38">
    <div>
      <div>${albums[id].tracks[id].title}</div>
      <div class="text-muted">${albums[id].tracks[i].author}</div>
    </div>
    <div class="ms-auto">${albums[id].tracks[i].time}</div>
</li>
  `;
}