document.addEventListener('DOMContentLoaded', () => {
  const galleryElement = document.querySelector('#photo .gallery');
  const imagePath = 'images/'; // Path to your images folder

  // --- IMPORTANT ---
  // Manually list your image filenames here:
  const imageFiles = [
    '2020_08_03_20200803_DSCF4769__Fujifilm Fujinon XF27mmF2.8_borderized_smaller.webp',
    '2020_08_22_20200822_DSCF4906__Fujifilm Fujinon XF35mmF2 R WR_borderized_smaller.webp',
    '2020_08_23_20200823_DSCF4975__35_borderized_smaller.webp',
    '2020_08_27_20200827_DSCF5080__35_borderized_smaller.webp',
    '2021_04_30_20210418_DSCF6312__35_borderized_mute_smaller.webp',
    '2021_09_05_20210710_DSCF6627__27_borderized_smaller.webp',
    '2021_12_17_20211210_DSCF7505__35_5-4_padded_smaller.webp',
    '2021_12_29_20211210_DSCF7494__35_borderized_smaller.webp',
    '2022_10_02_20221002_DSCF9500__35_framed_smaller.webp',
    '2022_12_06_20221206_DSCF9875__55_framed_smaller.webp',
    '2023_06_03_20230603_DSCF0510__35_framed_smaller.webp',
    '2023_07_27_20230727_DSCF1285__40.7_framed_smaller.webp',
    '2023_12_03_20231203_DSCF1848__35_framed_smaller.webp',
    '2023_12_27_20231227_DSCF2065__35_framed_smaller.webp',
    '2024_06_29_20240629_DSCF3817__70_5-4_padded_smaller.webp',
    '2024_07_15_20240715_DSCF4070__70_16-9_padded_smaller.webp',
    '2024_07_19_20240719_DSCF4444__70_16-9_padded_smaller.webp',
    '2024_07_19_20240719_DSCF4451__70_16-9_padded_smaller.webp',
    '2024_07_19_20240719_DSCF4453__300_16-9_padded_smaller.webp',
    '20211213_DSCF7559__35 1_16-9_padded_smaller.webp',
    '20240114_DSCF2295__35_5-4_padded_smaller.webp',
    '20240701_DSCF3878__35_5-4_padded_smaller.webp',
    '20240715_DSCF4070__70_16-9_padded_smaller.webp',
    '20240716_DSCF4137__35_5-4_padded_smaller.webp',
    '20241027_FXTV5513__35_5-4_padded_smaller.webp',
    '20241119_FXTV5745__35_5-4_padded_smaller.webp',
    '20241123_FXTV5809__35_5-4_padded_000000_smaller.webp',
    '20250201_FXTV6331__35_5-4_padded_smaller.webp',
    '20250413_FXTV6940__300_SOOC_5-4_padded_smaller.webp'
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
