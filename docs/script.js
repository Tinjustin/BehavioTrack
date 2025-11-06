const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();
function openModal(){document.getElementById('modal').classList.remove('hidden');document.getElementById('modal').setAttribute('aria-hidden','false');}
function closeModal(){document.getElementById('modal').classList.add('hidden');document.getElementById('modal').setAttribute('aria-hidden','true');}
document.getElementById('demoBtn').addEventListener('click', openModal);
document.getElementById('heroDemoBtn').addEventListener('click', openModal);
document.getElementById('closeModal').addEventListener('click', closeModal);
document.querySelector('.modal form').addEventListener('submit', (e) => { e.preventDefault(); alert('Thanks! This is a front-end only demo.'); closeModal(); });