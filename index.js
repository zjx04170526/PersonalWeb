// 切换主题
const themeBtn = document.querySelector('.theme-btn');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('theme-toggle');
  localStorage.setItem('theme', document.body.className);
});
document.body.className = localStorage.getItem('theme');