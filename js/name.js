// 随机点名器
const name = document.querySelector('.name')
const stu = ['张三', '李四', '王五', '刘六', '钱七', '孙八', '陈九']
let n = 0

const startBtn = document.querySelector('.start-btn')
startBtn.addEventListener('click', function () {
  startBtn.disabled = true
  n = setInterval(function () {
    let num = Math.floor(Math.random() * stu.length)
    name.innerHTML = stu[num];
  }, 50)

})

const endBtn = document.querySelector('.end-btn')
endBtn.addEventListener('click', function () {
  startBtn.disabled = false
  clearInterval(n);
})