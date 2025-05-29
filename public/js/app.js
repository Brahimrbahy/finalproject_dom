let modal = document.getElementById('idmod');
let loginBtn = document.getElementById('loginBtn');
let closeBtn = document.getElementById('closeBtn');


loginBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});



window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
