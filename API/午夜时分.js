/**
 * 编写一个采用负整数或正整数的函数，表示(-)周日午夜前或(+)周日午夜后的分钟数，
 * 并以24小时格式(“hh:mm”)作为字符串返回一周中的当前日期和当前时间
 * 
  dayAndTime(0)       should return 'Sunday 00:00'
  dayAndTime(-3)      should return 'Saturday 23:57'
  dayAndTime(45)      should return 'Sunday 00:45'
  dayAndTime(759)     should return 'Sunday 12:39'
  dayAndTime(1236)    should return 'Sunday 20:36'
  dayAndTime(1447)    should return 'Monday 00:07'
  dayAndTime(7832)    should return 'Friday 10:32'
  dayAndTime(18876)   should return 'Saturday 02:36'
  dayAndTime(259180)  should return 'Thursday 23:40' 
  dayAndTime(-349000) should return 'Tuesday 15:20'
 */
function dayAndTime(n) {
  const ms = new Date('2019 4 7 00:00:00').setMinutes(n);
  const date = new Date(ms);
  const map = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return `${map[date.getDay()]} ${date.toTimeString().slice(0, 5)}`;
}