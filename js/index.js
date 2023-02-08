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