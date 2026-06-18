// 天气预报
axios({
  url: 'http://hmajax.itheima.net/api/weather?',
  method: 'get',
  params: {
    city: '110100'
  }
}).then(res => {
  console.log(res);
  let html = `<h2>${res.data.data.area}未来7日天气预报</h2>`
  for (let i = 0; i < 7; i++) {
    const item = res.data.data.dayForecast[i];
    html += `
      <div class="weather-card">
        <div class="date">日期：${item.date}</div>
        <div class="temperature">温度：${item.temNight}°C~${item.temDay}°C</div>
        <div class="weather">天气：<img src="${item.weatherImg}" alt="${item.weather}"> ${item.weather}</div>
        <div class="wind-direction">风向：${item.windDirection}</div>
        <div class="wind-power">风力：${item.windPower}</div>
      </div>
      `
  }
  document.querySelector('.content').innerHTML = html;
})