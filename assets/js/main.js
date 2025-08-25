const track = document.getElementById('track');
const imgs = Array.from(track.children);

// duplica as imagens para dar looping infinito
imgs.forEach(img => {
  const clone = img.cloneNode(true);
  track.appendChild(clone);
});

// efeito de clique (mobile) + hover (desktop já funciona via CSS)
track.querySelectorAll('img').forEach(img => {
  img.addEventListener('click', () => {
    track.querySelectorAll('img').forEach(i => i.classList.remove('is-active'));
    img.classList.add('is-active');
  });
});
