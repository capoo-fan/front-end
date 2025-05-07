# 构建一个卡西欧计算器的表面前端程序的日志(基于 tailwindcss)

使用tailwindcss构建一个卡西欧计算器的表面前端程序

``` zsh
npm install tailwindcss @tailwindcss/cli

@import "tailwindcss"; #写入src/input.css

npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
```