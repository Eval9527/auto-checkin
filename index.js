const common = require('./common')

const MoFish = require('./script/MoFish')

const Msg = common.Msg
const sendNotify = common.sendNotify

async function start() {
  Msg.push(`---------`)
  Msg.push(`启动任务`)

  await new MoFish().init()

  console.log(Msg.getMsg())

  // sendNotify('自动签到通知', Msg.getMsg())
}

start()
