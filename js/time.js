// 倒计时计时器
const startBtn = document.querySelector('.start-btn');
const remain = document.querySelector('.remain');
const date = document.querySelector('.date');
startBtn.addEventListener('click', function () {
  if (date.value !== '') {
    startBtn.disabled = true;
    const timeInterval = setInterval(() => {
      const end = new Date(date.value).getTime();
      const now = new Date().getTime();
      const wait = end - now;
      if (wait <= 0) {
        clearInterval(timeInterval);
        remain.innerHTML = '倒计时结束！';
        startBtn.disabled = false;
        return;
      }
      const days = Math.floor(wait / (1000 * 60 * 60 * 24));
      const hours = Math.floor((wait % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((wait % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((wait % (1000 * 60)) / 1000);
      remain.innerHTML = `距离目标日期还有：${days}天${hours}时${minutes}分${seconds}秒`;
    }, 1000);
  }
});
