const axios = require('axios')
const common = require('../common')
const config = require('../config')

const formatResult = common.formatResult
const Msg = common.Msg

const JUE_JIN_COOKIE = config.JUE_JIN_COOKIE

class JueJin {
  url = `https://api.juejin.cn/growth_api/v1/check_in`

  constructor() {
    this.instance = axios.create()
  }

  async init() {
    const res = await this.getData(this.url)
    const result = await formatResult(this.getClassName(), res)
    Msg.push(result)
  }

  getClassName() {
    return JueJin.name
  }

  async getData(url) {
    const res = await this.instance({
      url, 
      method: 'post',
      headers: {'cookie': JUE_JIN_COOKIE}
    })

    try {
      if (res.status === 200) {
        return res.data.err_msg
      }
    } catch (e) {
      return e
    }
  }
}

module.exports = JueJin
