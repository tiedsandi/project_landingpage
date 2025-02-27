document.addEventListener('DOMContentLoaded', function () {
  let sections = document.querySelectorAll('section');
  let currentIndex = 0;
  let isScrolling = false;

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
    if (isScrolling) return;

    isScrolling = true;

    if (event.deltaY > 0) {
      if (currentIndex < sections.length - 1) {
        currentIndex++;
      }
    } else {
      if (currentIndex > 0) {
        currentIndex--;
      }
    }

    showSection(currentIndex);

    setTimeout(() => {
      isScrolling = false;
    }, 800);
  }

  document.addEventListener('wheel', handleScroll);
  showSection(currentIndex);
});
