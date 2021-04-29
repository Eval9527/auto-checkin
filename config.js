// cookie token

// MoFish Token
const MO_FISH_USERNAME = process.env.MO_FISH_USERNAME
const MO_FISH_PASSWORD = process.env.MO_FISH_PASSWORD

// server酱推送
const SERVER_J = process.env.SERVER_J

console.log(MO_FISH_USERNAME.length, MO_FISH_PASSWORD.length, SERVER_J.length);

module.exports = {
  MO_FISH_USERNAME,
  MO_FISH_PASSWORD,
  SERVER_J,
}
