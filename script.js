document.addEventListener("DOMContentLoaded", function () {
  const aboutBtn = document.querySelector(".custom1");
  const aboutSection = document.querySelector("about");

  if (aboutBtn && aboutSection) {
    aboutBtn.addEventListener("click", function () {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    });
  } else {
    console.log("Button or section not found.");
  }
});
document.addEventListener("DOMContentLoaded", function() {
  // Smooth scroll for all navigation links
  document.querySelectorAll('.Btn a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  const certBtn = document.querySelector('.custom3');
  if (certBtn) {
    certBtn.addEventListener('click', function(e) {
      e.preventDefault();
      const certSection = document.getElementById('certifications');
      if (certSection) {
        certSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  }
});
