import moment from 'moment'
moment.locale('zh-cn')

function parseTime(time) {
  const now = moment(new Date().toISOString())
  const lastTime = moment(time).format('YYYY-MM-DD');
  return lastTime
}

export default parseTime
