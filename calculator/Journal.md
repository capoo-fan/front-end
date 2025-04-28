# 计算器开发日志

``` html

<input type="text" name="input" value=" " />

```

input是建立一个输入框，value是决定初始存在的值

---

``` css
#calculator {
    margin: 0 auto;    /* 水平居中：上下为0，左右自动 */
    margin-top: 50px;  /* 覆盖上边距为50px */
}
```

---

``` css
#calculator {
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* 创建4列等宽网格 */
  grid-template-rows: auto repeat(4, 1fr); /* 1个自动行+4个等高行 */
  row-gap: 10px; /* 行间距 */
  column-gap: 20px; /* 列间距 */
  padding: 10px;
  width: 100%;
  height: 800px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin: 0 auto; /* 水平居中 */
  margin-top: 50px; /* 距离顶部的距离 */
}
#zero {
  grid-column: span 2; /* 横跨两列 */
  grid-row: span 1; /* 保持一行高度 */
  width: 75%; /* 确保宽度填满整个区域 */
  height: 100%; /* 确保高度填满 */
  background-color: #ffffff;
}

```

flex容器适合排布一维布局，grid很适合排布二维布局，然后grid-column/row可以为元素横跨行列

 
## 网页项目的布局建议

calculator/
├── src/                    # 源代码目录
│   ├── js/                 # JavaScript 文件
│   │   ├── main.js         # 主要脚本文件
│   │   └── utils/          # 工具函数
│   ├── styles/             # 样式文件
│   │   └── main.css        # 主要样式表
│   └── index.html          # 主HTML文件
├── public/                 # 静态资源
│   └── favicon.ico         # 网站图标等
├── dist/                   # 构建输出目录
├── node_modules/           # 依赖
├── package.json            # 项目配置
├── vite.config.js          # Vite配置
└── README.md               # 项目说明