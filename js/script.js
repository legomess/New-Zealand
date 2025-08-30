// ------------------------------------  GALLERY SECTION ----------------------------------------
document.addEventListener('DOMContentLoaded', () =>{
    const slides = document.querySelectorAll('.slider .slide');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    let current = 0;

    function popUpSlide(idx){
        slides.forEach((slide, i)=>{
            slide.classList.toggle('hidden', i !== idx);
        });
    }

    function changeSlide(delta){
        current = (current + delta + slides.length) % slides.length;
        popUpSlide(current);
    }

    prevBtn.addEventListener('click', () => changeSlide(-1));
    nextBtn.addEventListener('click' , () => changeSlide(1));

    setInterval(()=> changeSlide(1), 5000);
    popUpSlide(current);
});

  // 2) CURRENT PAGE HIGHLIGHT ------------------------------------------------
  // Adds .active to the nav link matching the current filename
  const navLinks = document.querySelectorAll('#menu a');
  const currentPage = location.pathname.split('/').pop();
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });

   // 3) SCROLL‑TO‑TOP BUTTON
  // ------------------------------------------------
  // Shows a “↑ Top” button when scrolled down, scrolls smoothly to top on click
  const toTop = document.getElementById('to-top');
  if (toTop) {
    window.addEventListener('scroll', () => {
      toTop.classList.toggle('arrow', window.scrollY < 200);
    });
    toTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

// History & Events pages.- Accordion effect.
// Toggles visibility of the panel immediately after each <h3> in .accordion
  document.querySelectorAll('.accordion h3').forEach(header => {
    header.addEventListener('click', () => {
      const panel = header.nextElementSibling;
      if (panel) panel.classList.toggle('arrow');
    });
  });



/* CSS Notes for Jose: Add these rules to css/style.css */
/* ---------------------------------------------------- */
/* 1) Hide slides and panels when .hidden is applied */
/* .slide.hidden { display: none; } */
/* .accordion .panel.hidden { display: none; } */

/* 2) Highlight active nav link */
/* #menu a.active { font-weight: bold; text-decoration: underline; } */

/* 3) Scroll‑to‑Top button styling */
/* #to-top { position: fixed; bottom: 1rem; right: 1rem; } */
/* #to-top.hidden { display: none; } */

/* 4) Slider container optional styling */
/* .slider { position: relative; max-width: 800px; margin: 0 auto; overflow: hidden; } */
/* .slider .slide { display: block; width: 100%; height: auto; } */
