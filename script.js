// --- Page Navigation Logic ---
function goToPage(pageNumber) {
  // Hide all pages
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.classList.remove('active'));

  // Show the target page
  const targetPage = document.getElementById(`page-${pageNumber}`);
  if (targetPage) {
    targetPage.classList.add('active');
  }

  // Trigger celebration effects
  if (pageNumber === 1) {
    fireIntroConfetti();
  } else if (pageNumber === 3) {
    createFloatingEmojis();
  } else if (pageNumber === 4) {
    fireFinaleConfetti();
  }
}

// --- Confetti Celebrations ---
function fireIntroConfetti() {
  confetti({
    particleCount: 80,
    spread: 60,
    origin: { y: 0.7 }
  });
}

function fireFinaleConfetti() {
  confetti({
    particleCount: 120,
    spread: 80,
    origin: { y: 0.6 }
  });

  setTimeout(() => {
    confetti({
      particleCount: 60,
      angle: 60,
      spread: 55,
      origin: { x: 0 }
    });
    confetti({
      particleCount: 60,
      angle: 120,
      spread: 55,
      origin: { x: 1 }
    });
  }, 300);
}

// Initial confetti when page loads
window.addEventListener('DOMContentLoaded', () => {
  fireIntroConfetti();
});

// --- Page 3 Floating Animated Emojis ---
let emojisSpawned = false;
function createFloatingEmojis() {
  if (emojisSpawned) return;
  emojisSpawned = true;

  const container = document.getElementById('emojiCanvas');
  const emojiList = ['✨', '🎈', '🎂', '🧸', '🍭', '💖', '🎉', '🌸'];

  for (let i = 0; i < 28; i++) {
    const emojiEl = document.createElement('div');
    emojiEl.classList.add('floating-emoji');
    emojiEl.innerText = emojiList[Math.floor(Math.random() * emojiList.length)];
    
    emojiEl.style.left = `${Math.random() * 95}%`;
    emojiEl.style.animationDuration = `${4 + Math.random() * 5}s`;
    emojiEl.style.animationDelay = `${Math.random() * 3}s`;
    emojiEl.style.fontSize = `${1.5 + Math.random() * 1.5}rem`;

    container.appendChild(emojiEl);
  }
}