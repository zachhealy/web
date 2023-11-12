const photoGrid = document.getElementById('photo-grid');
  const overlay = document.getElementById('overlay');
  const enlargedPhoto = document.getElementById('enlarged-photo');

  photoGrid.addEventListener('click', (event) => {
    if (event.target.classList.contains('photo')) {
      const clickedImageSrc = event.target.src;

      enlargedPhoto.src = clickedImageSrc;

      overlay.style.display = 'block';
      enlargedPhoto.style.display = 'block';

      document.body.style.overflow = 'hidden';
    }
  });

  overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
    enlargedPhoto.style.display = 'none';

    document.body.style.overflow = 'auto';
  });