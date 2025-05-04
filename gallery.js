document.addEventListener('DOMContentLoaded', () => {
  const galleryElement = document.querySelector('#photo .gallery');
  const imagePath = 'images/'; // Path to your images folder

  // --- IMPORTANT ---
  // Manually list your image filenames here:
  const imageFiles = [
    '2024_05_13_20240513_DSCF3228__35_5-4_padded.webp',
    '2024_07_19_20240719_DSCF4439__70_smaller.webp',
    '2024_07_19_20240719_DSCF4444__70_smaller.webp',
    '20211213_DSCF7559__35 1_smaller.webp',
    '20211213_DSCF7559__35_smaller.webp',
    '20220516_DSCF8579__18_5-4_padded_smaller.webp',
    '20240715_DSCF4070__70_smaller.webp',
    '20240716_DSCF4072__70_smaller.webp',
    '20240716_DSCF4077__70_smaller.webp',
    '20240716_DSCF4082__70_smaller.webp',
    '20240716_DSCF4085__70_smaller.webp',
    '20240716_DSCF4086__70_smaller.webp',
    '20240716_DSCF4088__70_smaller.webp',
    '20240716_DSCF4093__70_smaller.webp',
    '20240716_DSCF4153__35 1_smaller.webp',
    '20240716_DSCF4153__35_smaller.webp',
    '20240719_DSCF4253__70_smaller.webp',
    '20241123_FXTV5809__35_5-4_padded_000000_smaller.webp'
  ];
  // --- END IMPORTANT ---

  if (!galleryElement) {
    console.error('Gallery element not found in #photo section.');
    return;
  }

  if (imageFiles.length === 0) {
    galleryElement.innerHTML = '<p>Please add image filenames to gallery.js to display them here.</p>';
    return;
  }

  imageFiles.forEach(filename => {
    const img = document.createElement('img');
    img.src = imagePath + filename;
    img.alt = filename; // Use filename as alt text, consider making this more descriptive
    img.loading = 'lazy'; // Improve performance by lazy loading images

    // Add click listener for enlarge/shrink
    img.addEventListener('click', () => {
      const currentlyEnlarged = galleryElement.querySelector('img.enlarged');
      if (currentlyEnlarged && currentlyEnlarged !== img) {
        // If another image is enlarged, shrink it first
        currentlyEnlarged.classList.remove('enlarged');
      }
      // Toggle the enlarged class on the clicked image
      img.classList.toggle('enlarged');
    });

    galleryElement.appendChild(img);
  });
});
