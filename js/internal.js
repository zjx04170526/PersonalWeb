// 站内搜索
const all = ['首页', '个人简介', '个人资料', '个人经历', '兴趣爱好', '乒乓球', 'NCUT', '站内搜索', '站外搜索', 'Google搜索', 'Bing搜索', '天气预报', 'ITZY', '黄礼志', '崔智秀', '申留真', '李彩领', '申有娜', '随机点名器', '倒计时计算器'];
const pages = ['index', 'resume', 'information', 'experience', 'hobby', 'pingpong', 'ncut', 'internal', 'external', 'google', 'bing', 'weather', 'itzy', 'yeji', 'lia', 'Ryujin', 'chaeryeong', 'yuna', 'name', 'time'];
const input = document.querySelector('.search-input');
const result = document.querySelector('.search-result');
input.addEventListener('focus', function () {
  result.classList.toggle('show-result');
})
input.addEventListener('blur', function () {
  setTimeout(() => {
    result.classList.remove('show-result');
  }, 100);
})
input.addEventListener('input', function () {
  const value = input.value;
  if (value === '') {
    result.innerHTML = `<p>请输入搜索内容</p>`;
    return;
  }
  let html = '';
  for (let i = 0; i < all.length; i++) {
    if (all[i].includes(value)) {
      html += `<div class="search-item"><a href="../html/${pages[i]}.html">${all[i]}</a></div>`;
    }
  }
  if (html === '') {
    result.innerHTML = `<p>没有搜索到相关结果</p>`;
    return;
  }
  result.innerHTML = html;
})