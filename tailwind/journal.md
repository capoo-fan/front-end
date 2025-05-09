# 构建一个卡西欧计算器的表面前端程序的日志(基于 tailwindcss)

使用tailwindcss构建一个卡西欧计算器的表面前端程序

``` zsh
npm install tailwindcss @tailwindcss/cli

@import "tailwindcss"; #写入src/input.css

npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
```


## head技术细节

* max-w-sm 设置计算器的最大宽度
* shadow-xl 加入阴影
* row-span-3 设置行跨度