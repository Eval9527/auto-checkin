function getTime(type) {
  const time = new Date()
  const month = time.getMonth() > 8 ? time.getMonth()+1 : "0"+ time.getMonth()+1
  const day = time.getDate() > 8 ? time.getDate() : "0"+ time.getDate()
  switch (type) {
    case 1:
      return `${month}月${day}日 ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
    case 2:
      return `${"" + time.getFullYear() + month + day}`
    case 3:
      return `${"" + time.getFullYear() + "-" + month+ "-" + day}`
  }
}

module.exports.getTime = getTime
