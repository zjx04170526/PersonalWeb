// 天气预报
async function getRealtimeWeather() {
  const apiKey = 'c63f38c44bb144f4b05c3978c7efe5be';
  const location = '101010100';
  const url = `https://n233jnfyt6.re.qweatherapi.com/v7/weather/7d?location=${location}&key=${apiKey}`
  try {
    const res = await axios({
      method: 'get',
      url: url,
    })
    console.log(res.data.daily);
    let html = `<h2>北京未来7日天气预报</h2>`
    for (let i = 0; i < res.data.daily.length; i++) {
      const item = res.data.daily[i];
      html += `
      <div class="weather-card">
        <div class="date">日期：${item.fxDate}</div>
        <div class="temperature">温度：${item.tempMin}°C~${item.tempMax}°C</div>
        <div class="weather">天气：${item.textDay}</div>
        <div class="vis">能见度：${item.vis}km</div>
        <div class="wind-direction">风向：${item.windDirDay}</div>
        <div class="wind-scale">风力：${item.windScaleDay}级</div>
        <div class="wind-speed">风速：${item.windSpeedDay}km/h</div>
      </div>
      `
    }
    document.querySelector('.content').innerHTML = html;
  } catch (error) {
    console.error('获取天气数据失败：', error);
    document.querySelector('.temperature').innerHTML = '获取失败';
    document.querySelector('.weather').innerHTML = '获取失败';
  }
}
getRealtimeWeather();