const schedule = require('node-schedule')
const axios = require('axios')
const config = require('./config')
const common = require('./common')

const getTime = common.getTime

const MO_FISH_TOKEN = config.MO_FISH_TOKEN
const MO_FISH_URL = `https://api.tophub.fun/GetFishBall`

class MoFish {
  constructor(token, url) {
    this.instance = axios.create()
    this.instance.defaults.headers.common['Authorization'] = token;

    if (!token) return console.log(`TOKEN 为空！`)

    this.getData(url).then(r => console.log(`任务：【mofish】已启动，${r}，时间：${getTime(1)}`))
  }

  async getData(url) {
    const res = await this.instance.get(url)

    try {
      if (res.status === 200) {
        return res.data.Message
      }
    } catch (e) {
      return e
    }
  }
}



const scheduleCronstyle = () => {
  // 每天的早上 9 点 0 分 0 秒触发
  schedule.scheduleJob('0 0 9 * * *', () => {
    start()
    console.log('定时任务启动:' + getTime(1))
  })
}

async function start() {
  console.log(`---------`)
  console.log(`启动任务`)

  new MoFish(MO_FISH_TOKEN, MO_FISH_URL)
}

start()
scheduleCronstyle()
