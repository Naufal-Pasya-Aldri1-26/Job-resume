// Mencoba memuat gambar profil dengan beberapa kemungkinan nama berkas
document.addEventListener('DOMContentLoaded', () => {
  const img = document.querySelector('.photo');
  if (!img) return;

  const imagePaths = [
    'images/Resume photo (professional).jpg',
    'images/Resume%20photo%20%28professional%29.jpg',
    'images/resume-photo.jpg',
    'images/resume_photo.jpg'
  ];

  function loadNextImage() {
    if (imagePaths.length === 0) {
      console.warn('Profile image not found. Tried multiple filenames.');
      return;
    }
    const src = imagePaths.shift();
    const testImg = new Image();
    testImg.onload = () => {
      img.src = src;
    };
    testImg.onerror = () => {
      loadNextImage();
    };
    testImg.src = src;
  }

  // Jika sudah ada src, tes terlebih dulu; jika gagal, coba nama lain
  const initialSrc = img.getAttribute('src');
  if (initialSrc) {
    const testInitial = new Image();
    testInitial.onload = () => {
      /* src awal valid; tidak perlu apa-apa */
    };
    testInitial.onerror = () => {
      loadNextImage();
    };
    testInitial.src = initialSrc;
  } else {
    loadNextImage();
  }
});
