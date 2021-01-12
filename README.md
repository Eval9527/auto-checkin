定时签到，Github Actions 版

## 前置条件
需要相对应项目的 token 以及用于推送的 Server 酱的 token

## 配置
Fork 本项目

在项目页面中 Settings —— Secrets 点击 `New secret` 添加 MO_FISH_TOKEN、SERVER_J

## `token` 获取方式：
### MO_FISH_TOKEN 
- mo.fish 的 token
- 去 [鱼塘热榜](https://mo.fish/) 登陆之后去 Local Storage 中获取 token


### SERVER_J
- server酱的 token
- 去 [Server酱](http://sc.ftqq.com/?c=code) 获取 `SCKEY`

## 运行
### 启动 Actions
   - 点击项目功能栏的 Action
   - 点击绿色按钮进行激活

### 自动运行
启动 Actions 后，会自动运行，具体触发条件：
   - commit 后会自动运行
   - 默认每天 08:05 运行

剩下的具体看 `.github/workflows/main.yml`

## TODO
- [x] mo.fish 签到

## QA
1) token 失效了怎么办？
   去 Settings —— Secrets 更新相对应的 token，然后再产生一次 `commit` 
