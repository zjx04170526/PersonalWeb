// 站外搜索
const btn = document.querySelector('.search-btn');
btn.addEventListener('click', function () {
  const input = document.querySelector('.search-input');
  const value = input.value;
  if (value !== '') {
    const url = `https://www.google.com/search?q=${value}`;
    window.open(url, '_blank');
  }
})