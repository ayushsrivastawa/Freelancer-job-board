// script.js

// Add event listeners to navigation links
document.querySelectorAll('nav a').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const sectionId = link.getAttribute('href').replace('#', '');
      document.querySelector(`#${sectionId}`).scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Add event listeners to form submissions
  document.querySelectorAll('form').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // Handle form submission logic here (e.g., send data to backend API)
    });
  });
  
  // Add event listeners to card hover effects
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('mouseover', () => {
      card.classList.add('hover');
    });
    card.addEventListener('mouseout', () => {
      card.classList.remove('hover');
    });
  });