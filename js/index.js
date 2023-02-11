for (let i = 0; i < albums.length; i++){
  document.querySelector('.albums').innerHTML += `
  <div class="col">
  <a href="album.html?i=${i}" class="text-decoration-none">
    <div class="card">
      <img src="${albums[i].img}" class="card-image-top">
      <div class="card-body text-dark">
        ${albums[i].title}
      </div>
    </div>
  </a>
</div>
  `;
}