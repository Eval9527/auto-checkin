const axios = require('axios')
const common = require('../common')
const config = require('../config')

const getTime = common.getTime
const formatResult = common.formatResult
const Msg = common.Msg

const MO_FISH_TOKEN = config.MO_FISH_TOKEN

class MoFish {
  url = `https://api.tophub.fun/GetFishBall`

  constructor() {
    if (!MO_FISH_TOKEN) return Msg.push(`TOKEN 为空！`)

    this.instance = axios.create()
    this.instance.defaults.headers.common['Authorization'] = 'Bearer ' + MO_FISH_TOKEN
  }

  async init() {
    const res = await this.getData(this.url)
    const result = await formatResult(this.getClassName(), res)
    Msg.push(result)
  }

  getClassName() {
    return MoFish.name
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

module.exports = MoFish
