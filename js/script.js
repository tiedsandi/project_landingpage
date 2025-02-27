document.addEventListener('DOMContentLoaded', function () {
  let sections = document.querySelectorAll('section');
  let currentIndex = 0;
  let lastScrollTop = 0;

  function showSection(index) {
    sections.forEach((section, i) => {
      if (i === index) {
        section.classList.add('fade-in');
        section.classList.remove('fade-out');
      } else {
        section.classList.add('fade-out');
        section.classList.remove('fade-in');
      }
    });
  }

  function handleScroll(event) {
    let st = window.pageYOffset || document.documentElement.scrollTop;

    if (event.deltaY > 0 || st > lastScrollTop) {
      // Scroll ke bawah
      if (currentIndex < sections.length - 1) {
        currentIndex++;
        showSection(currentIndex);
      }
    } else {
      // Scroll ke atas
      if (currentIndex > 0) {
        currentIndex--;
        showSection(currentIndex);
      }
    }

    lastScrollTop = st <= 0 ? 0 : st; // Update posisi scroll terakhir
  }

  document.addEventListener('wheel', handleScroll);
  showSection(currentIndex);
});
