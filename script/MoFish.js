const axios = require('axios')
const qs = require('querystring')
const common = require('../common')
const config = require('../config')

const getTime = common.getTime
const formatResult = common.formatResult
const Msg = common.Msg
const TitleMsg = common.TitleMsg

// const MO_FISH_TOKEN = config.MO_FISH_TOKEN
const MO_FISH_USERNAME = config.MO_FISH_USERNAME
const MO_FISH_PASSWORD = config.MO_FISH_PASSWORD

class MoFish {
  url = `https://api.tophub.fun/GetFishBall`
  loginURL = `https://api.tophub.fun/ULogin`

  constructor() {
    // if (!MO_FISH_TOKEN) return Msg.push(`TOKEN 为空！`)

    this.instance = axios.create()
    // this.instance.defaults.headers.common['Authorization'] = 'Bearer ' + MO_FISH_TOKEN
  }

  async init() {

    // 获取 token 
    const token = await this.getToken()
    if (!token) {
      return Msg.push(`账号密码异常！`)
    }

    // 设置 token
    this.instance.defaults.headers.common['Authorization'] = token

    const res = await this.getData(this.url)
    const result = await formatResult(this.getClassName(), res)
    Msg.push(result)
  }

  getClassName() {
    return MoFish.name
  }

  async getToken() {
    const data = qs.stringify({ email: MO_FISH_USERNAME, pwd: MO_FISH_PASSWORD })
    const res = await this.instance.post(this.loginURL, data)
    if (res.status === 200 && res.data.Code === 0) {
      return res.data.Data.token
    }
    return 
  }

  async getData(url) {
    const res = await this.instance.get(url)

    try {
      if (res.status === 200) {
        if (res.data.Code !== 0) {
          // TitleMsg.
        }
        return res.data.Message
      }
    } catch (e) {
      return e
    }
  }
}

module.exports = MoFish
