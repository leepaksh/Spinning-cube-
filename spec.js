const cube = document.querySelector('.cube');
cube.addEventListener('mouseenter', () => {
  cube.style.animationPlayState = 'paused';
});
cube.addEventListener('mouseleave', () => {
  cube.style.animationPlayState = 'running';
});
