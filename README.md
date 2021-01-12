定时签到，Github Actions 版

## 前置条件
需要相对应项目的 token 以及用于推送的 Server 酱的 token

## 配置
Fork 本项目

去 Settings —— Secrets 添加 MO_FISH_TOKEN、SERVER_J

## `token` 获取方式：
### MO_FISH_TOKEN 
- mo.fish 的 token
- 去 [鱼塘热榜](https://mo.fish/) 登陆之后去 Local Storage 中获取 token


### SERVER_J
- server酱的 token
- 去 [Server酱](http://sc.ftqq.com/?c=code) 获取 `SCKEY`

## 运行方式
1) commit 后会自动运行
2) 默认每天 08:05 运行 `cron: '5 0 * * *'`

剩下的具体看 `.github/workflows/main.yml`

## TODO
- [x] mo.fish 签到
