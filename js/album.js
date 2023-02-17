let search = new URLSearchParams(window.location.search);
let id = search.get(`i`);

albumRender();
tracksRender();
setupAudio();


function albumRender(){
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
}

function tracksRender(){
  for (let i = 0; i < albums[id].tracks.length; i++){
    document.querySelector(`.playlist`).innerHTML += `
    <li class="list-group-item d-flex align-item-center track">
      <img src="assets/play_icon.png" class="me-3 play-button" height="38">
      <div class="title">
        <div>${albums[id].tracks[i].title}</div>
        <div class="text-muted">${albums[id].tracks[i].author}</div>
      </div>
      <div class="progress">
        <div class="progress-bar" role="progressbar" aria-valuenow="0" style="width: 0%" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <div class="ms-auto time">${albums[id].tracks[i].time}</div>
      <audio class="audio" src="${albums[id].tracks[i].src}"></audio>
  </li>
    `;
  }
}


function setupAudio() {
  let tracks = albums[id].tracks;
  let trackNodes = document.querySelectorAll(`.track`);
  let playButtons = document.querySelectorAll(`.play-button`);

  for (let i = 0; i < trackNodes.length; i++) { 
    
    let node = trackNodes[i];
    let timeNode = node.querySelector(`.time`);
    let audio = node.querySelector(`.audio`);
    let progressBar = node.querySelector(`.progress-bar`);
    
    node.addEventListener('click',function(){
      if (tracks[i].isPlaying) {
        tracks[i].isPlaying = false;
        audio.pause();
        playButtons[i].src = `assets/play_icon.png`;
      } else {
        tracks[i].isPlaying = true;
        audio.play();
        updateProgress();
        playButtons[i].src = `assets/pause_icon.png`;
      }
    });
    
    function updateProgress(){
      time = getTime(audio.currentTime);
      if (time.innerHTML != time) {
        timeNode.innerHTML = time;
        progressBar.style.width = audio.currentTime * 100 / audio.duration + '%';
      }
      if (tracks[i].isPlaying) {
        requestAnimationFrame(updateProgress);
      }    
    }
  }
}

function getTime(time){
  let currentSecinds = Math.floor(time);
  let minutes = Math.floor(currentSecinds/60);
  let seconds = Math.floor(currentSecinds%60);
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds
  }

  return `${minutes}:${seconds}`
}