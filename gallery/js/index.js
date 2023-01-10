function openGallery(id) {
  closeAll();
  var gallery = document.getElementById('gallery-' + id);
  var card = document.getElementById('card-' + id);
  gallery.classList.add('Gallery--active');
  card.classList.add('Card--active');
}

function closeAll() {
  var galleryActv = document.querySelector('.Gallery--active');
  var cardActv = document.querySelector('.Card--active');
  if (galleryActv) {
    galleryActv.classList.remove('Gallery--active');
  }
  if (cardActv) {
    cardActv.classList.remove('Card--active');
  }
}