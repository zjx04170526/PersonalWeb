// 切换主题
const themeBtn = document.querySelector('.theme-btn');
themeBtn.addEventListener('click', function () {
  document.body.classList.toggle('theme-toggle');
  localStorage.setItem('theme', document.body.className);
});
document.body.className = localStorage.getItem('theme');

// 动态显示时间和问候语
function getTime() {
  const now = new Date();
  const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString();
  const hour = now.getHours();
  const timeBox = document.querySelector('.time');
  timeBox.innerHTML = date + " " + time;
  if (hour >= 3 && hour < 6) {
    timeBox.innerHTML += " 凌晨了，好好休息哦";
  } else if (hour < 9) {
    timeBox.innerHTML += " 早上好！";
  } else if (hour < 12) {
    timeBox.innerHTML += " 上午好！";
  } else if (hour < 14) {
    timeBox.innerHTML += " 中午好！";
  } else if (hour < 18) {
    timeBox.innerHTML += " 下午好！";
  } else if (hour < 23) {
    timeBox.innerHTML += " 晚上好！";
  } else {
    timeBox.innerHTML += " 夜深了，该休息了";
  }
}
getTime();
setInterval(getTime, 1000);

// 跑马灯效果
const marquee = document.querySelector('.marquee');
let x = window.innerWidth;
setInterval(function () {
  x--;
  marquee.style.transform = `translateX(${x}px)`;
  if (x < -128) {
    x = window.innerWidth;
  }
}, 1);
