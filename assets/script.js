const cards = document.querySelectorAll('.card, .project-card');
for (const card of cards) {
  card.addEventListener('mousemove', event => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(37,217,255,.18), rgba(18,26,64,.72) 42%)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.background = 'rgba(18, 26, 64, .72)';
  });
}
