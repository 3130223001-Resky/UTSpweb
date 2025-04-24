const toggleBtn = document.getElementById('toggle-dark');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggleBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

document.querySelectorAll('.dropdown-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    const dropdown = btn.nextElementSibling;
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  });
});

document.querySelectorAll('.btn-detail').forEach((btn, index) => {
  btn.addEventListener('click', () => {
    const product = btn.closest('.product-card');
    document.getElementById('modal-img').src = product.querySelector('img').src;
    document.getElementById('modal-title').textContent = product.querySelector('h4').textContent;
    document.getElementById('modal-desc').textContent = product.querySelector('p').textContent;
    document.getElementById('modal-price').textContent = product.querySelector('.price').textContent;
    document.getElementById('product-modal').style.display = 'block';
  });
});

document.querySelector('.modal .close').addEventListener('click', () => {
  document.getElementById('product-modal').style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === document.getElementById('product-modal')) {
    document.getElementById('product-modal').style.display = 'none';
  }
});
