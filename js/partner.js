  // Partner Section Animation
  const scrollContainer = document.getElementById('scroll-container');
  let scrollAmount = 0;

  function scrollPartners() {
    scrollAmount += 300; // Adjust based on the width of partner images
    if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
      scrollAmount = 0;
    }
    scrollContainer.scrollTo({ left: scrollAmount, behavior: 'smooth' });
  }

  setInterval(scrollPartners, 4000); // 4 seconds interval