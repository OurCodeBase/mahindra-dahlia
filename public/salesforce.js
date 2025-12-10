const container = document.getElementById("dahlia_extension_container")
container.addEventListener('click', (e) => {
  console.log(e.target.id)
})

const b = document.querySelector('.dahlia_extension_mover');
let offsetX, offsetY;

const onMove = e => {
  const r = window.innerWidth - e.clientX - (b.offsetWidth - offsetX);
  const t = e.clientY - offsetY;
  container.style.right = r + 'px';
  container.style.top = t + 'px';
};

const onUp = () => {
  document.removeEventListener('mousemove', onMove);
  document.removeEventListener('mouseup', onUp);
};

b.addEventListener('mousedown', e => {
  const rect = b.getBoundingClientRect();
  offsetX = e.clientX - rect.left;
  offsetY = e.clientY - rect.top;
  document.addEventListener('mousemove', onMove);
  document.addEventListener('mouseup', onUp);
});
