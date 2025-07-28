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
  function toggleMessageBox() {
    const box = document.getElementById("chat-box");
    box.style.display = box.style.display === "none" ? "block" : "none";
  }

  document.getElementById("chat-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const status = document.getElementById("chat-status");

    const data = {
      name: document.getElementById("chat-name").value,
      email: document.getElementById("chat-email").value,
      message: document.getElementById("chat-message").value
    };

    // Example using Formspree endpoint
    fetch("https://formspree.io/f/mldlnbnw", {
      method: "POST",
      headers: { 'Accept': 'application/json' },
      body: new URLSearchParams(data)
    }).then(response => {
      if (response.ok) {
        status.textContent = "Message sent!";
        this.reset();
      } else {
        status.textContent = "Error sending message.";
      }
    }).catch(() => {
      status.textContent = "Something went wrong.";
    });
  });
 // Toggle chat box visibility
  function toggleMessageBox() {
    const chatBox = document.getElementById('chat-box');
    chatBox.style.display = chatBox.style.display === 'block' ? 'none' : 'block';
  }

  // Close chat box
  function closeMessageBox() {
    document.getElementById('chat-box').style.display = 'none';
  }

  // Form submission
  document.getElementById('chat-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const status = document.getElementById('chat-status');
    status.textContent = "Message sent! (This is a demo)";
    status.style.color = "green";
    
    // Clear form
    this.reset();
    
    // Hide message after 3 seconds
    setTimeout(() => {
      status.textContent = "";
    }, 3000);
  });


