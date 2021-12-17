// минуты-часы-число-месяц-год
let arrDateArgv = process.argv[2].split('-');
let arrDate = {
  minute: arrDateArgv[0],
  hour: arrDateArgv[1],
  day: arrDateArgv[2],
  month: arrDateArgv[3],
  year: arrDateArgv[4],
};
const interval = setInterval(() => {
  const now = new Date() - new Date().getTimezoneOffset() * 60 * 1000;
  const target = new Date(
    arrDate['year'],
    arrDate['month'],
    arrDate['day'],
    arrDate['hour'],
    arrDate['minute'],
  );
  const result = new Date(target - now);
  const year = result.getFullYear() - 1970;
  const mounth = result.getMonth() - 1;
  const days = result.getDay();
  const hours = result.getHours();
  const minutes = result.getMinutes();
  const seconds = result.getSeconds();
 
  if (result.getTime() - new Date('Sun 1 February 1970 00:00:00').getTime() <= 0) {
    console.log('Время истекло');
    clearInterval(interval);
  } else {
     console.log(
    `${year} лет, ${mounth} месяцев, ${days} дней, ${hours} часов, ${minutes} минут, ${seconds} секунд`,
  );
  }
}, 1000);