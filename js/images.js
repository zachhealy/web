const photoGrid = document.getElementById('photo-grid');

  const imageFolderPath = 'designs';

  // Array to store image file names
  const imageFileNames = [
    'album art.jpg',
    'cherry blossom.jpg',
    'gameday.jpg',
    'jungle.jpg',
    'personal trainers.jpg',
    'Redbull.jpg',
    'RedBull2.jpg',
    'SE Christmas.jpg',
    'Towers.jpg',
    'westGymCorner.jpg'
  ];

  // Function to create an img element for each image
  function createImageElement(fileName) {
    const img = document.createElement('img');
    img.classList.add('photo');
    img.src = `${imageFolderPath}/${fileName}`;
    img.alt = 'Dynamic Photo';
    photoGrid.appendChild(img);
  }

  // Load images into the grid
  imageFileNames.forEach(createImageElement);