const tabButtons = document.querySelectorAll('.tab-button');
const tabContent = document.getElementById('tabContent');

function loadTab(tabName) {
  fetch(`tabs/${tabName}.html`)
    .then(res => res.text())
    .then(html => {
      tabContent.innerHTML = html;
      if (tabName !== 'position') {
        document.body.style.backgroundImage = 'none';
        document.body.style.backgroundColor = 'white';
      } else {
        document.body.style.backgroundColor = 'black';
      }
    });
}

tabButtons.forEach(button => {
  button.addEventListener('click', e => {
    document.querySelector('.tab-button.active').classList.remove('active');
    e.target.classList.add('active');
    loadTab(button.dataset.tab);
  });
});

window.addEventListener('DOMContentLoaded', () => {
  loadTab('position');
});
